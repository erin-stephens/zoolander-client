/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="userprofile-container">
      <img src={user.fbUser.photoURL} alt="User" className="userprofile-profileImage" />
      <h1 className="userprofile-profileName">{user.fbUser.displayName}</h1>
      <h3 className="userprofile-profileEmail">{user.fbUser.email}</h3>
      <h4 className="userProfile-profileLastLogin">Last Login: {user.fbUser.metadata.lastSignInTime}</h4>
    </div>
  );
}
