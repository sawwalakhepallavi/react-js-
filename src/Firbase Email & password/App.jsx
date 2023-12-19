import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Firbase Email & password/Home'
import Login from './Firbase Email & password/Login'
import SignUp from './Firbase Email & password/SignUp'
import './App.css';

import React from 'react'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App