import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
        <div className='header_left'>
            <div className='head-l'>About Us</div>
            <div className='head-l'>Privacy</div>
            <div className='head-l'>FAQ</div>
            <div className='head-l'>Career</div>
        </div>
        <div className='header_right'>
            <div>My Wishlist    |   </div>
            <div>Track Your Order</div>
            <div className='head-r'><i class="fa-brands fa-facebook"></i></div>
            <div className='head-r'><i class="fa-brands fa-instagram"></i></div>
            <div className='head-r'><i class="fa-brands fa-twitter"></i></div>
            <div className='head-r'><i class="fa-brands fa-linkedin"></i></div>
            <div className='head-r'><i class="fa-brands fa-youtube"></i></div>
        </div>
    </div>
  )
}

export default Header