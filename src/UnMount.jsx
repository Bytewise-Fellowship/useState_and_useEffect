import React,{useEffect,useState} from 'react'

const UnMount = () => {
    let [count,setCount] = useState(0);
    
    useEffect(()=>{
        setCount(count+1);
        return ()=>{
            alert("i unmounted using useEffect");
        }
    },[])
  return (
    <div>
        <p>i am unMounted to display the unmount functionality of useEffect</p>
        <h2>count is {count}</h2>

    </div>
  )
}

export default UnMount