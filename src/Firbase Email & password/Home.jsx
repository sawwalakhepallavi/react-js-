import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate()

   
  async function handleLogout(e){
    e.preventDefault()
    try{
      await signOut(auth)
      navigate('/')
    }catch(error){
      console.log("error");
    }
  }
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home