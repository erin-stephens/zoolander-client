import React from 'react';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '700px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome To</h1>
      <br />
      <h1>The Derek Zoolander Center For Children Who Can't Read... Good</h1>
      <h4>(And Who Want To Do Other Stuff Good Too)</h4>
      <br />
      <p>Click the button below to login!</p>
      <button type="button" className="btn btn-primary btn-lg copy-btn" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;
