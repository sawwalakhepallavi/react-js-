import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Ecommers/Component/Home'
import Cart from './Ecommers/Component/Cart'
import Navbar from './Ecommers/Component/Navbar'
import About from './Ecommers/Component/About'
import { useState } from 'react'
import Data from './Ecommers/Data'

const App = () => {
  const[search,setSearch]=useState("")
  const[cart,setCart] =useState([])
  const[data,setData]=useState(Data)


  function handleClick(item){
    setCart([...cart,item])
  }


  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar setSearch={setSearch} size={cart.length} data={data} setData={setData}/>
        <Routes>
          <Route path='/' element={<Home data={data} search={search} handleClick={handleClick}/>}></Route>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
          <Route path='/about/:aboutId' element={<About Data={Data}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App