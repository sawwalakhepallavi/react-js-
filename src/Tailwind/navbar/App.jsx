
// import Less from './Less/Less'
// 
// const App = () => {
  // return (
    // <div>
      {/* <Less/> */}
    {/* </div> */}
  // )
// }
// 
// export default App

import React from 'react'

const App = () => {
  const handleHover = () => {
    const content = document.getElementById('hiddenContent');
    content.style.display = 'block';
  };
  const handleLeave = () => {
    const content = document.getElementById('hiddenContent');
    content.style.display = 'none';
  };

  return (
    <div className='flex justify-between items-center p-10 bg-blue-200' >
      <div className="font-bold text-lg" onMouseOver={handleHover} onMouseLeave={handleLeave}>store</div>
      <div className='hover:font-bold'>mac</div>
      <div className='hover:font-bold'>ipad</div>
      <div className='hover:font-bold'>iphone</div>
      <div className='hover:font-bold'>watch</div>
      <div className='hover:font-bold'>AirPods</div>a
      <div className='hover:font-bold'>TV & Home</div>
      <div className='hover:font-bold'>Entertainkent</div>
      <div className='hover:font-bold'>Sccessories</div>
      <div className='hover:font-bold'>Support</div>
      <div id="hiddenContent" className="hidden absolute bg-white p-4 shadow-md mt-2">
        <h1>shop the lates</h1>
        <h1>mac</h1>
        <h1>ipad</h1>
        <h1>iphone</h1>
      </div>

    </div>
  )
}

export default App