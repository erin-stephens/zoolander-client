/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

function Home() {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex', // Added display property
          alignItems: 'center', // Vertically align contents
        }}
      >
        <div
          className="image-container"
          style={{
            flex: '1',
            marginRight: '20px',
            borderRadius: '10px',
            boxShadow: '5px 5px 15px black',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F013%2F833%2Fc.jpg"
            alt="derek and school"
            style={{ width: '100%', height: '100%', borderRadius: '10px' }}
          />
        </div>
        <div
          className="text-container"
          style={{
            flex: '1',
            paddingLeft: '20px',
            backgroundImage: 'url(https://img.freepik.com/free-photo/empty-blackboard_53876-16241.jpg)',
            backgroundSize: '100% 100%', // Stretch both horizontally and vertically
            backgroundPosition: 'center bottom',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <h1>The Derek Zoolander Center For Children Who Can't Read... Good</h1>
          <br />
          <h4>(And Who Want To Do Other Stuff Good Too)</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
