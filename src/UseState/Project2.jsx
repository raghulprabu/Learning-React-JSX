import React, { useState } from 'react'

// In this example, the text state variable holds a string. 
// When you type, handleChange reads the latest input value from the browser input DOM element, 
// and calls setText to update the state. This allows you to display the current text below.

 export const Project2 = () => {

     const[text  , settext] = useState ("hello")

    //    let handelchange = (e) =>{
    //     settext(e.terget.value)
    //    }
    function handlechange(e) {
        settext(e.target.value);
      }

  return (
    <div>
        <input
           value={text}
           onChange={handlechange}
        >
        </input>

        <p>{text}</p>

        <button onClick={() => settext('hello')}>
        Reset
      </button>

      <hr />

      
    </div>

  )
}

export default Project2
