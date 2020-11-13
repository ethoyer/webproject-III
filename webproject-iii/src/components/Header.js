import React from 'react';
import { useUser } from 'reactfire';
import Logout from './Logout.js';
import './header.css';
import {FaPlus} from "react-icons/fa";

function Header() {
    const user = useUser();

  return (
      <header>
          <nav>
          <a href="/">Home</a>
          {/* displays logout, newlisting log in and profile link depending on user is logged in or logged out. */}
          {user && <Logout/>}    
          {!user && <a href="/login">Login</a>}
          {user && <a href="/profile">Profile</a>}
          {user && <a href="/newlisting"> <FaPlus /> New Listing</a>}
          </nav>
      </header>
  )
}

export default Header;

