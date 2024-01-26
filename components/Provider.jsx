'use client'

import { SessionProvider } from "next-auth/react";

// This will wrap other components
const Provider = ({ children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider