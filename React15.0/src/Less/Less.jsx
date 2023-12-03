import React from 'react'
import'./Less/style.less'

const Less = () => {
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

export default Less