import React, { useEffect, useState } from 'react'
import { provider,auth } from './firebase'
import { signInWithPopup } from 'firebase/auth'
import Home from './Home'

const Signup = () => {
    const [value,setValue]=useState("")

    function handleClick(){
        signInWithPopup(auth,provider)
        .then((data)=>{setValue(data.user.email)
        window.sessionStorage.setItem('Name',data.user.email)
        })
    }

    useEffect(()=>{
        window.sessionStorage.getItem('Name')
    })

  return (
    <div>
        <h1>Login Here</h1>
        {(value)?(<Home/>):(<button onClick={handleClick}>SignUp with Google </button>)}
    </div>
  )
}

export default Signup