import React from 'react';
import { Link } from 'react-router-dom';

function RegisterUserSuccess() {
  return (
    <main>
      <h2>User registered successfully</h2>
      <Link to="/">Press here to return to homepage</Link>
    </main>
  )
}

export default RegisterUserSuccess;