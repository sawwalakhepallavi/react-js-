import React from 'react'
import { useReducer } from 'react'

const initialState=0
const App = () => {
  const [count,dispatch]=useReducer(reducer,initialState)
  function reducer(state,action){
    switch(action){
      case "incre":
        return state+1

      case "decre":
        return state-1

      default:
        return state;
    }
  }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch("incre")}>+</button>
        <button onClick={()=>dispatch("decre")}>-</button>
    </div>
  )
}

export default App