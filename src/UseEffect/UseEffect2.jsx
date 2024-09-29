import React, { useEffect, useState } from 'react'

export const UseEffect2 = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(" within any dependency")
  })
  console.log("without any dependency")

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 10000);            //! Runs on every render
  });

  return (
    <div>
      <h1> useEffect =  Runs on Every Render  </h1>
      <button onClick={() => setCount((value) => value + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((value) => value - 1)}>-</button>

    </div>
  )
}

export default UseEffect2
