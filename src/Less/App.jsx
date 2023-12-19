import React from 'react'
import './Less/App.less'

const App = () => {
  return (
    <div className='App'>
      <form>
        <h1>Registration From</h1>
        <input type="text" placeholder='Enter Your Name' />
        <br />
        <input type="email" placeholder='Enter Your Email'/>
        <br />
        <input type="password" placeholder='Enter Your Password' />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App