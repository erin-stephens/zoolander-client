/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import logo from '/public/photos/logo.png';

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <Image
          src={logo}
          alt="Zoolander Kids"
          className="logo-photo"
        />
        <h1>Welcome {user.displayName} to the... </h1>
        <br />
        <br />
        <h1>The Derek Zoolander Center For Children Who Can't Read... Good</h1>
        <h4>(And Who Want To Do Other Stuff Good Too)</h4>
        <br />
        <p>Click the button below to logout!</p>
        <button className="btn btn-danger btn-lg copy-btn" type="button" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Home;
