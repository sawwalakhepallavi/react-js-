import React from 'react'

const Home = () => {
function handleLogout(){
    sessionStorage.clear()
    window.location.reload()
}
  return (
    <div>
        <h1>Home</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home