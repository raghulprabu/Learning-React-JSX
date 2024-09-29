import React, { useEffect } from 'react'
import { useState } from 'react'

 export const Useeffect = () => {

  const [count , setcount ] = useState(0)

  useEffect(() => {
    //&    Your side effect code here (e.g., data fetching, event listeners)
  
    return () => {
       //^   Optional cleanup code (e.g., removing event listeners)
    };
  }, []);  
  //!  dependencies
  

  return (
    <div>
      <h1> structure UseEffect</h1>
      <h1> the Counting {count}</h1>
      <button onClick={() => setcount((value)=> value + 1)}>+</button>
      <button onClick={() =>  setcount((value)=> value -1)}>-</button>

    </div>
  )
}

export default Useeffect