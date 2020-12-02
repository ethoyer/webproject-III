import React from 'react';
import { useUser } from 'reactfire';
import Logout from './Logout.js';
import './header.css';
import {FaPlus} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
    const user = useUser();

  return (
      <header>
          <nav>
          <Link to="/">Home</Link>
          {/* displays logout, newlisting log in and profile link depending on user is logged in or logged out. */}
          {user && <Logout/>}    
          {!user && <Link to="/login">Login</Link>}
          {user && <Link to="/profile">Profile</Link>}
          {user && <Link to="/newlisting"> <FaPlus /> New Listing</Link>}
          </nav>
      </header>
  )
}

export default Header;

