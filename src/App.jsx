import React from 'react'
import Navbar from './3.project tailwind/Navbar'
import Header from './3.project tailwind/Header';

const App = () => {
  return (
    <div>
       {/* <nav style={{height:'90px', width:'100%', background:'black',display:'flex', justifyContent:'space-around', padding:'25px', position:'absolute',top:'0px',left:'0px',zIndex:'9999', opacity:'0.5'}} >
              <h3 style={{color:'white', fontWeight:'bold'}}>Shop</h3>
              <h3 style={{color:'white'}}>Product</h3>
              <h3 style={{color:'white'}}>Card</h3>
        </nav>
         
        <div style={{background:"url('https://metro.co.uk/wp-content/uploads/2017/11/510977219.jpg?quality=90&strip=all')", height:'90vh', width:'100%',backgroundRepeat:'no-repeat', backgroundSize:'cover', position:'absolute', top:'0%'}}>
             <h1 className=' font-extrabold text-8xl justify-center p-72 px-96 text-white' style={{textShadow:'10px 10px 20px #000000'}}><center>Deal Is Here</center></h1>
        </div>
        <br />
        <br />
        
        <header style={{background:"url('https://cdn.pixabay.com/photo/2019/03/31/07/44/music-4092614_1280.jpg')" , height:'50vh', width:'100%'}}>
            
        </header> */}
        <Navbar/>
        <Header/>


    </div>
  )
}

export default App