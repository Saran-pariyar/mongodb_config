import Image from "next/image";
import connectMongoDB from "@/lib/mongodb"
import UserInfo from "@/components/UserInfo"

export default function Home() {

  //  connectMongoDB()


  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <UserInfo />
    </main>
  );
}
