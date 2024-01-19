'use client';

import { useState } from "react";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav>
      {/* two different navs depending if user is logged in */}
      <h1>Nav</h1>
    </nav>
  );
}
 
export default Nav;