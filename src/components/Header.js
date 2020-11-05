import React from 'react';
import { useUser } from 'reactfire';
import Logout from './Logout.js';
import './header.css';

function Header() {
    const user = useUser();
    const url = window.location.href;
    const profile = url.endsWith("/profile");

  return (
      <header class="navbar">
          <a href="/">Logo</a>
          {/* displays logout, log in and profile link depending on user is logged in, logged out or not on the /profile page. */}
          {user && <Logout/>}
          {!user && <a href="/login">login</a>}
          {!profile && <a href="/profile">Profile</a>}
      </header>
  )
}

export default Header;