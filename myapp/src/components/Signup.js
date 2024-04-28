import { useEffect, useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom";




export default function Signup() {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    useEffect(()=>{
      const auth= localStorage.getItem('user');
      if (auth){
        navigate('/')
      }
      })

    const logindata = async ()=>{
        console.log(name,email,password);

        let result = await fetch('http://localhost:5000/register',{
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/')
    }


  return (
    <div>
       <div className="login-container">
          <h1>Register</h1>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/><br />
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/><br />
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/><br />
          <button onClick={logindata}>Sign Up</button>
       </div>
    </div>
  )
}

//match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],trim:true
