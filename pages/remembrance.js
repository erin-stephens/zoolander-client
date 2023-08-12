/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-indent */
import React from 'react';
// import { Card } from 'react-bootstrap';

export default function Remembrance() {
  return (
    <div className="remContainer">
      <div className="d-flex align-items-center">
        <div
          className="remText"
          style={{
            flex: '1',
            paddingLeft: '20px',
            backgroundImage: 'url(https://img.freepik.com/free-photo/empty-blackboard_53876-16241.jpg)',
            backgroundSize: '100% 100%', // Stretch both horizontally and vertically
            backgroundPosition: 'center bottom',
            padding: '30px',
          }}
        >
          <h1>Remembrance</h1>
          <br />
          <h3>
            Just because we have chiseled abs and stunning features doesn&apos;t mean we too can&apos;t not die in a freak gasoline fight accident.
          </h3>
        </div>
        <img
          src="https://64.media.tumblr.com/5e38bd5dfcda75c41c0f3c0d8a97a6f7/tumblr_o24yh5KzDm1rzt03ao7_r1_640.jpg"
          alt="remembrance"
          className="remPhoto"
        />
      </div>
    </div>
  );
}
