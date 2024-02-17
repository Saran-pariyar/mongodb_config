"use client";
//we need to make it client component if we use SessionProvider
import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
