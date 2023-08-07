/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();

  const profileContainer = {
    textAlign: 'center',
    backgroundColor: 'gray',
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

  const profileLastLogin = {
    position: 'relative',
    fontSize: '10px',
    color: 'white',
    top: '-10px',
  };

  return (
    <div style={profileContainer}>
      <img src={user.photoURL} alt="User" style={profileImage} />
      <h1 style={profileName}>{user.displayName}</h1>
      <h3 style={profileEmail}>{user.email}</h3>
      <h4 style={profileLastLogin}>Last Login: {user.metadata.lastSignInTime}</h4>
    </div>
  );
}
