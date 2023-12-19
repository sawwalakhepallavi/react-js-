import React, { useState } from 'react';

function App() {
  const [location, setLocation] = useState(null)
  const [weather, setWeather] = useState(null)
  const[search,setSearch]=useState("")

  const api={
    key:"96c5055a050645e5a4d9154f426694fc",
    base:"https://api.openweathermap.org/data/2.5/weather"
  }

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    fetch(`${api.base}?q=${search}&lat=${latitude}&lon=${longitude}&APPID=${api.key}&units=metric`)
      .then(response => response.json())
      .then(data => {setWeather(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }
  function error() {
    console.log("Unable to retrieve your location");
  }


  return (
    <div>
      <input type="search" placeholder='enter your city1' onChange={(e)=>setSearch(e.target.value)} />
      {!location ? <button onClick={handleLocationClick}>Get Location</button> : null}
      {location && !weather ? <p>Loading weather data...</p> : null}
      {weather ? (
        <div>
          <p>Location: {weather.name}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;