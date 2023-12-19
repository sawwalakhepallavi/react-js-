import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import{auth} from './config'
import {signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {


  const[email, setEmail]=useState("")
  const[password,setPassword]=useState("")
  const Navigate=useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    try{
      const userCredential=await signInWithEmailAndPassword(auth,email,password)
      const user=userCredential.user
      console.log(user);
      alert("login succesfully")
      Navigate('/home')
    }catch(error){
      console.log("error");
      alert("worng email or password")
    }
    
  }

  return (
    <div className='Login'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Your Email"></input>
            <br />
            <br />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter Password"></input>
            <br />
            <br />
            <button type='submit'>Login</button>
            <p>Already Have An Account</p>
        </form>
    </div>
  )
}

export default Login