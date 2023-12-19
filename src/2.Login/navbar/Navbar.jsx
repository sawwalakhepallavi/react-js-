import React from 'react'
import './Navbar.less'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>Home</div>
        <div><input type="search" placeholder='search'/></div>
        <div>sign Up</div>
        <div>Login</div>
    </div>
  )
}

export default Navbar