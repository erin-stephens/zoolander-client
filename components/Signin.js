/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <>
      <div className="text-center d-flex flex-column align-items-center justify-content-center vh-100">
        <div
          className="image-container d-flex justify-content-center align-items-center"
          style={{
            width: '60%',
            borderRadius: '10px',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              border: '5px solid rgba(255, 255, 255, 0.3)',
              width: '50%',
              marginRight: '10px',
            }}
          >
            <img
              src="https://i.pinimg.com/564x/e3/cb/4b/e3cb4be27942349c5b0b9ae592da5161.jpg"
              alt="philosophical zoolander"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div
            style={{
              width: '50%',
              boxShadow: '5px 5px 15px black',
            }}
            onClick={signIn}
          >
            <img
              src="https://i.imgur.com/ehT4rWu.jpg"
              alt="sign in"
              style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
