import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";
import React, { useState } from 'react'


const App = () => {
  const[input,setInput]=useState({name:"", email:"", password:""})
  const fileType="xlsx"
  function handleChange(e){
      setInput({...input,[e.target.name]:e.target.value})
  }
  function handleClick(e){
    e.preventDefault()
    console.log(input);
  }
  const exportToCSV=()=>{
    const ws=XLSX.utils.json_to_sheet(input);
    const wb={sheets:{data:ws},sheetName:["data"]};
    const excelBuffer=XLSX.write(wb,{bookType:"xlsx",type:"array"});
    const data=new Blob([excelBuffer],{type:fileType});
    FileSaver.saveAs(data,"myfile"+".xlsx")
  }
  return (
    <div>
      <from>
        <input type="text" placeholder='enter your name' name='name' value={input.name} onChange={handleChange}/>
        <br />
        <input type="email" placeholder='enter your email' name='email' value={input.email} onChange={handleChange}/>
        <br />
        <input type="password" placeholder='enter your password' name='password' value={input.password} onChange={handleChange}/>
        <br />
        <button onClick={handleClick}>Submit</button>
        <button onClick={exportToCSV}>Export</button>
      </from>
    </div>
  )
}

export default App