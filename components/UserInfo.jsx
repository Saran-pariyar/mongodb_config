"use client";

import Image from "next/image";
// import SignInBtn from "./SignInBtn";
import SignInBtn from "./SignInBtn"

import { useSession, signOut } from "next-auth/react";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200">
        {/* we have to add lh3.googleusercontent.com in next.config.js to make the image work  */}
        {/* <Image
          className="rounded-full"
          src={session?.user?.image}
          width={60}
          height={60}
        /> */}
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
}
