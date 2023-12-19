import React from 'react'
import './section.css'

const Section = () => {
  return (
    <div className='sec'>
       <form action="">
        <h1>Login Here</h1>
        <br />
        <input type="text" placeholder='Enter your name' />
        <br />
        <br />
        <input type="email" placeholder='Enter your email'/>
        <br />
        <br />
        <input type="password" placeholder='enter your password' />
        <br />
        <br />
        <button>Submit</button>
       </form>

    </div>
  )
}

export default Section