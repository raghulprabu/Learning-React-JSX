import React, { useEffect, useState } from 'react'

 export const UseEffect1 = () => {

     const [count , setCount] = useState(0)

     useEffect(()=>{
     //!  Runs only on the first render
     },[]);

     useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []);     //&   Add empty brackets here
  

  return (
    <div>
         <h1>  UseEffect = Runs only on the First Render </h1>
        <button onClick={() => setCount((value)=>value+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount((value)=>value-1)}>-</button>
      
    </div>
  )
}

export default UseEffect1
