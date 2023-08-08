/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();

  const profileContainer = {
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: '8px',
    maxWidth: '275px',
    margin: '0 auto',
    marginTop: '100px',
  };

  const profileImage = {
    position: 'relative',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px',
    top: '-75px',
  };

  const profileName = {
    position: 'relative',
    fontSize: '24px',
    top: '-65px',
  };

  const profileEmail = {
    position: 'relative',
    fontSize: '18px',
    top: '-60px',
  };

  return (
    <div style={profileContainer}>
      <img src={user.fbUser.photoURL} alt="User" style={profileImage} />
      <h1 style={profileName}>{user.fbUser.displayName}</h1>
      <h3 style={profileEmail}>{user.fbUser.email}</h3>
    </div>
  );
}
