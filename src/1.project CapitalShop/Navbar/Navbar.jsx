import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='nav-l'>
          <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png" alt="" />
        </div>
        <div className='nav-2'>
          <ul id='navigation'>
            <li><a href="./Home">Home</a></li>
            <li><a href="./men">Men</a></li>
            <li><a href="./Women">Women</a></li>
            <li><a href="./baby collection">Baby Collection</a></li>
            <li><a href="./pages">Pages</a></li>
            <li><a href="./blog">Blog</a></li>
            <li><a href="./Contact">Contact</a></li>
          </ul>
        </div>
        <div className='nav-3'>
            <div className='navdiv'><i class="fa-solid fa-magnifying-glass"></i></div>
            <div className='navdiv'><i class="fa-solid fa-user"></i></div>
            <div className='navdiv'><i class="fa-solid fa-cart-shopping"></i></div>
        </div>
    </div>
  )
}

export default Navbar