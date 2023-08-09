// Context API Docs: https://beta.reactjs.org/learn/passing-data-deeply-with-context

import React, {
  createContext, //
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { checkUser, registerUser } from '../auth';
import { firebase } from '../client';

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext'; // Context object accepts a displayName string property. React DevTools uses this string to determine what to display for the context. https://reactjs.org/docs/context.html#contextdisplayname

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [oAuthUser, setOAuthUser] = useState(null);

  // there are 3 states for the user:
  // null = application initial state, not yet loaded
  // false = user is not logged in, but the app has loaded
  // an object/value = user is logged in

  const updateUser = useMemo(
    () => (uid) => checkUser(uid).then((gamerInfo) => {
      setUser({ fbUser: oAuthUser, ...gamerInfo });
    }),
    [oAuthUser],
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged((fbUser) => {
      if (fbUser) {
        setOAuthUser(fbUser);
        checkUser(fbUser.uid).then((gamerInfo) => {
          // If the user is not registered, automatically register them
          if (!gamerInfo.uid) {
            registerUser(fbUser)
              .then((response) => {
                if (response.success) {
                  // Registration was successful
                  const updatedUser = { fbUser, uid: fbUser.uid, ...response.data };
                  setUser(updatedUser);
                } else {
                  // Handle registration failure
                  console.error('User registration failed:', response.error);
                }
              })
              .catch((error) => {
                console.error('Error during user registration:', error);
              });
          } else {
            // User is already registered, update the user context state
            const userObj = { fbUser, uid: fbUser.uid, ...gamerInfo };
            setUser(userObj);
          }
        });
      } else {
        setOAuthUser(false);
        setUser(false);
      }
    });
  }, []);

  const value = useMemo(
    // https://reactjs.org/docs/hooks-reference.html#usememo
    () => ({
      user,
      updateUser,
      userLoading: user === null || oAuthUser === null,
      // as long as user === null, will be true
      // As soon as the user value !== null, value will be false
    }),
    [user, oAuthUser, updateUser],
  );

  return <AuthContext.Provider value={value} {...props} />;
};
const AuthConsumer = AuthContext.Consumer;

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth, AuthConsumer };
