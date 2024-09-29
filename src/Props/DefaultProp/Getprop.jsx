import React from 'react'

 export const Getprop = (props) => {
    console.log(props)
  return (
    <div>
        <h1 className='get'>Get props gets</h1>
        <p className='st'>{props.start}</p>
        <p className='le'>{props.learn}</p>

    </div>
  )
}

export default Getprop// if it's inside a components folder