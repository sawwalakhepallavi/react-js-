import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-gray-950 text-white z-10'>
        <div className='flex justify-evenly items-center bg-black-200' style={{height:'auto', width:'100%'}}>
        <div>Home</div>
        <div>About</div>
        <div>Service</div>
        <div>Careers</div>
        </div>
        <div className='flex justify-between items-center bg-black-200' style={{height:'auto', width:'100%'}}>
            <div><input type="search" placeholder='Search' className='bg-transparent bottom-2 border-b-orange-800 border:none' /><i class="fa-sharp fa-solid fa-magnifying-glass"></i></div>
            <div><button className='bg-red-500 p-2 hover:bg-sky-900'>Login</button></div>
        </div>
    </div>
  )
}

export default Navbar