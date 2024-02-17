"use client";
//need to make it client component if we use event listener
// import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SignInBtn() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      {/* <Image src="/google.png" alt="Google" height={30} width={30} /> */}
      <p>G</p>
      <span className="bg-blue-500 text-white px-4 py-3">
        Sign in with Google
      </span>
    </button>
  );
}
