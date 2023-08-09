/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="userprofile-container">
      <img src={user.photoURL} alt="User" className="userprofile-profileImage" />
      <h1 className="userprofile-profileName">{user.displayName}</h1>
      <h3 className="userprofile-profileEmail">{user.email}</h3>
      <h4 className="userProfile-profileLastLogin">Last Login: {user.metadata.lastSignInTime}</h4>
    </div>
  );
}
