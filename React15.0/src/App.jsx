import React from 'react'
import "./App.css"

const App = () => {
  return (
    <div>
        <input type="text" placeholder='FirstName'/>
        <br />
        <br />
        <input type="text" placeholder='LastName'/>
        <br />
        <br />
        <input type="text" placeholder='Email' />
        <br />
        <br />
        <input type="text" placeholder='Password' />
        <br />
        <br />
        <button>Submit</button>
    </div>
  )
}

export default App