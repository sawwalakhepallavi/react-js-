import React, { useState } from 'react'

const App = () => {
  const[input,setInput]=useState({name:"", email:"", password:""})
  function handleChange(e){
      setInput({...input,[e.target.name]:e.target.value})
  }
  function handleClick(e){
    e.preventDefault()
    console.log(input);
  }
  return (
    <div>
      <from>
        <input type="text" placeholder='enter your name' name='name' value={input.name} onChange={handleChange}/>
        <br />
        <input type="email" placeholder='enter your email' name='email' value={input.email} onChange={handleChange}/>
        <br />
        <input type="password" placeholder='enter your password' name='password' value={input.password} onChange={handleChange}/>
        <br />
        <button onClick={handleClick}>Submit</button>
      </from>
    </div>
  )
}

export default App