import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Navbar_div'><i class="fa-brands fa-apple"></i></div>
        <div className='Navbar_div'>Home</div>
        <div className='Navbar_div'>About</div>
        <div className='Navbar_div'>Gallary</div>
        <div className='Navbar_div'><input type="search"/><i class="fa-light fa-magnifying-glass"></i></div>
        <div className='Navbar_div'>Cart</div>
    </div>
  )
}

export default Navbar