"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUser (){

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

  
  const router = useRouter();


  const handleSubmit = async (e:any) =>{
    e.preventDefault();
    if(!name || !email){
      alert("Form and email are required");
      return;
    }
    
    try{
    const res = await fetch("http://localhost:3000/api/topics",{
      method: "POST",
      headers:{
        "Content-type": "application/json",
      },
      body: JSON.stringify({name, email, password}),
    })
    if (res.ok) {
      router.push("/");
    } else {
      throw new Error("Failed to create a User");
    }
    }
    catch{
    
    }
}


} 