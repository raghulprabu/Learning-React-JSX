import React from 'react'
import { useState } from 'react'

 export const  Project1 = () => {
     const [count , setCount]= useState(0)

     let increment = ()=>{
        setCount(count+1)
     }
      let decrement = () =>{
        setCount(count-1)
      }
      let Reset = () =>{
        setCount(0)
      }
  return (
    <div>
        <h1> the  count is start</h1>
        <h1>{count}</h1>
        <button onClick={increment}> increment</button>
        <button onClick={decrement}>Decerment</button>
        <button onClick={Reset}> Reset</button>
      
    </div>
  )
}

export default Project1
