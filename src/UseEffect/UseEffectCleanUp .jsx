import React, { useState , useEffect } from 'react'

 export const UseEffectCleanUp  = () => {


     const [count , setcount]=useState()

     useEffect(() => {
        let timer = setTimeout(() => {
        setcount((count) => count + 1);
      }, 1000);
    
      return () => clearTimeout(timer)
      }, []);

  return (
    <div>
        <h1>UseEffect CleanUp</h1>
        <h2>I've rendered {count} times!</h2>
      
    </div>
  )
}

export default UseEffectCleanUp 
