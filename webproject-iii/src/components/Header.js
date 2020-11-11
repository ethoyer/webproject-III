import React from 'react';
import { useUser } from 'reactfire';
import Logout from './Logout.js';
import './header.css';

function Header() {
    const user = useUser();
    const url = window.location.href;

  return (
      <header>
          <nav>
          <a href="/">Logo</a>
          {/* displays logout, log in and profile link depending on user is logged in or logged out. */}
          {user && <a href="/profile">Profile</a>}
          {user && <Logout/>}
          {!user && <a href="/login">login</a>}
          </nav>
      </header>
  )
}

export default Header;
