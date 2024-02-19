import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
// import clientPromise from "../../../../lib/mongodb"
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";

const authOptions ={
providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks:{
async signIn({user, account}){
  //this will show in terminal
  // console.log("User " , user);
  // console.log("Account ", account);

if(account.provider === "google"){
  const { name, email } = user;
        try {
          await connectMongoDB();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch("http://localhost:3000/api/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });

            if (res.ok) {
              console.log("User added to the database!");
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
}


  return user;
}
  }
}



  const handler = NextAuth(authOptions);
  export { handler as GET, handler as POST };
