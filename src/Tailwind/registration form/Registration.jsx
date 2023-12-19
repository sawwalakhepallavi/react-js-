import React from 'react'

const Registration = () => {
  return (
    <div className='flex justify-center items-center p-10 bg-cover  bg-no-repeat bg-center ' style={{background:"URL(https://cdn.pixabay.com/photo/2022/04/10/16/44/wood-7123804_640.jpg)", height:'100vh' , width:'100%'}}  >
        <form className='text-center '  style={{height:'auto' , width:'300px'}}>
            <h1>Registration Form</h1>
            <input type="text" placeholder='Enter Your Name'/>
            <br />
            <br />
            <input type="email" placeholder='Enter Your Email'/>
            <br />
            <br />
            <input type="password" placeholder='Enter Your Password' />
            <br />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Registration