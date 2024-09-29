import React, { useEffect, useState } from 'react'

 export const UseEffect3 = () => {

    const[count , setCount]=useState(0)
    const[calcuation , setCalculation]=useState(0)

    useEffect(()=>{

       // ! Runs on the first render
       //&  And any time any dependency value changes
        
    })

    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  

  return (
    <div>
        <h1> 
          Runs on the first render<br/>
         And any time any dependency value changes
        </h1>
        <button onClick={()=> setCount((value)=>value+1)}>Increment</button>
          <h1>{count}</h1>
          <h1>{calcuation}</h1>
        <button onClick={()=>setCount((value)=>value-1)}>Decrement</button>  
      
    </div>
  )
}

export default UseEffect3
