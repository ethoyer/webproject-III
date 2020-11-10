import React from 'react';
import { useUser } from 'reactfire';
import Logout from './Logout.js';

function Header() {
    const user = useUser();
    const url = window.location.href;

  return (
      <header>
          <a href="/">Logo</a>
          {/* displays logout, log in and profile link depending on user is logged in or logged out. */}
          {user && <a href="/profile">Profile</a>}
          {user && <Logout/>}
          {!user && <a href="/login">login</a>}
      </header>
  )
}

export default Header;