import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import{auth} from './config'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const SignUp = () => {
  const[email, setEmail]=useState("")
  const[password,setPassword]=useState("")
  const Navigate=useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    try{
      const userCredential=await createUserWithEmailAndPassword(auth,email,password)
      const user=userCredential.user
      console.log(user);
      alert("created succesfully")
      Navigate('/login')
    }catch(error){
      console.log("error");
    }
    
  }

  return (
    <div className='SignUp'>
      <div className='from-signup'>
        <form onSubmit={handleSubmit}>
          <h1>SingUp</h1>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Your Email"/>
            <br />
            <br />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter Password"/>
            <br />
            <br />
            <button type='submit'>SignUp</button>
            <p>Already Have An Account <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp