import { useState,useEffect } from 'react'
import UnMount from './UnMount';
import "./App.css";

function App() {
  let [count, setCount] = useState(0)
  let [data,setData] = useState(0);
  let [result,setResult] = useState(false);
  
  
  useEffect(()=>{
    setData(data+1)
  },[count])

  useEffect(()=>{
    setResult(true)
  },[])



  return (
    <div>
        <div>
        <button onClick={()=>{setCount(count-1)}}> Counter--</button>
        <h1> This is count state {count}</h1>
        <button onClick={()=>{setCount(count+1)}}> Counter++</button>
        </div>
      
        <h1> This is data state {data}</h1>
        <button onClick={()=>{setResult(!result)}}> Mount and unMount</button>
        {result? <UnMount/>:""}

    </div>
  )
}

export default App
