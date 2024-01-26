'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    }
    setUpProviders();
  });

  useEffect(() => {
    // const fetchUser
  })

  return (
    <nav>
      <Image src="/assets/Lift-Log-Pro.png" alt='Logo' width={70} height={70} />
      {session?.user ?
        <div>
          <h1>Welcome {}</h1>
        </div>
        :
        <div>
          {/* Authentication */}
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => {
                  signIn(provider.id)
                }}
                className="black_btn"
              >
                Sign In
              </button>
            ))
          }
        </div>
        
      }
    </nav>
  );
}
 
export default Nav;