import React, { useState } from 'react'

const App = () => {
  const[search,setSearch]=useState("")
  const[weather,setWeather]=useState({})
  const api={
    key:"96c5055a050645e5a4d9154f426694fc",
    base:"https://api.openweathermap.org/data/2.5/weather"
  }
  function handlesearch(){
    fetch(`${api.base}?q=${search}&APPID=${api.key}`)
    .then(res=>res.json())
    .then(d=>setWeather(d))
  }
  return (
    <div>
      <input type="search" placeholder='Enter Your city' onChange={(e)=>setSearch(e.target.value)}></input>
      <button onClick={handlesearch}>Search</button>
      <div>
        {(typeof weather.main !== "undefined")?(<div>
          <p>{weather.name}</p>
          <p>{weather.main.temp}</p>
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
        </div>):("Not Found")}
      </div>
    </div>
  )
}

export default App