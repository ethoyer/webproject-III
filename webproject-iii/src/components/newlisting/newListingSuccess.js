import React from 'react';
import { Link } from 'react-router-dom';

function newListingSuccess() {
  return (
    <main>
      <h2>Your listing has been posted!</h2>
      <Link to="/profile">Click here to view your listings</Link>
    </main>
  )
}

export default newListingSuccess;