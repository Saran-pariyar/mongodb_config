import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";


export async function POST(request){
    const {name, email, password} =  await request.json();
    await connectMongoDB();
    await User.create({name,email, password})
    return NextResponse.json({message: "User created"}, {status:201})
}

export async function GET(){
    await connectMongoDB();
 const users =    await User.find();
 return NextResponse.json({users})
}