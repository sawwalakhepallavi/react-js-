import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { useState } from "react"
import Data from "./Data"
import "./App.css"

const App = () =>{

    const[data,setData]=useState(Data);
    let d=new Date();
    var date=d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
    return(
        <div id="box">
            <div id="box1">
                <h2>Today's BDay🎂🎉</h2>
                <u>({date})</u>
                <div>
                    {data.map((e)=>{
                        return(
                            <div key={e.name} id="box2">
                                <img src={e.image} alt="" />
                                <div>
                                <p>
                                    <h3>{e.name}</h3>
                                    ({e.age})
                                </p>
                                
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button onClick={()=>setData([]) }>Clear All</button>
                
            </div>
        </div>
    )
}
export default App