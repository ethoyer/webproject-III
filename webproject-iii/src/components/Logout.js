import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

const Logout = () => {
  // Import firebase
  const firebase = useFirebaseApp();

  // Log out function
  const handleClick = () => {
    firebase.auth().signOut();
  }

  return (
    <>
      <a href="/" onClick={handleClick}>Log Out</a>
    </>
  )
};

export default Logout;