import React from 'react'
import {userId} from 'react';

const App = () => {
  const id1=userId()
  const id2=userId()
  return (
    <div>
      <h1 id={id1}>Hello</h1>
      <h1 id={id2}>Bye</h1>
    </div>
  )
}

export default App