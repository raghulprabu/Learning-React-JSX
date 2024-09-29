import React from 'react'

 export const PassingEvent = () => {
  const shoot = (a) =>
  {
    alert(a)
  }
  return (
    <div>
 
       <h1>Passing Events </h1>
      <button  className="button" onClick={() => shoot("Get Ready for Next")} > wait complete React</button>
      
    </div>
  )
}
export default PassingEvent
