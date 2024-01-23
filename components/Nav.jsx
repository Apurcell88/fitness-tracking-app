'use client';

import { useState } from "react";
import Image from "next/image";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav>
      {!isLoggedIn ?
        <div>
          {/* <Image src="assets/logo.png" alt='Logo' width={50} height={50} /> */}
          <button>Sign In</button>
        </div> :
        <div>
          <h1>Test</h1>
        </div>
      }
    </nav>
  );
}
 
export default Nav;