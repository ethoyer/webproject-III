import React from 'react';
import { useUser } from 'reactfire';
import Logout from './Logout.js';

function Header() {
    const user = useUser();
  return (
      <header>
          {user && <Logout/>}
          {!user && <a href="/login">login</a>}
      </header>
  )
}

export default Header;