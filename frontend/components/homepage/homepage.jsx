import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="home-text">
          <h1 className="home-title">Find your inspiration.</h1>
          <h2 className="home-para">
            Join the Slickr community, home to tens of 
            billions of photos and 2 million groups.
          </h2>
          <button className="start-for-free"><Link to="/signup">Start for free</Link></button>
        </div>
      </div>
    );
  };
}

export default HomePage;