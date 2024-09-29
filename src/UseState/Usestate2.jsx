
// What Can State Hold

import React, { useState } from 'react'

 export const Usestate2 = () => {

     const [name , myname ] =useState("raghul")
     const [age ,myage] = useState("23")
     const [place , myplace ] = useState("Bangalore")
     const [year , myyear] = useState("2000")

      
     
  return (
    <div>
      <h2>{name}</h2>
        <h1> I am {name} and  my age  is {age} I staying{place} my birth year is{year}</h1>
      
    </div>
  )
}

export default Usestate2

// The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

// We could create multiple state Hooks to track individual values
