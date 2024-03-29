import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import { Link } from 'react-router-dom';

const Logout = () => {
  // Import firebase
  const firebase = useFirebaseApp();

  // Log out function
  const handleClick = () => {
    firebase.auth().signOut();
  }

  return (
    <>
      <Link to="/" onClick={handleClick}>Log Out</Link>
    </>
  )
};

export default Logout;