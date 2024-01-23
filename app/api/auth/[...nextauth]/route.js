import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

import User from "@/models/user";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      
    })
  ]
})