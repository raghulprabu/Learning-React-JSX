import React, { useState } from 'react'

export const Usestate1 = () => {
    const [changes, setvalue] = useState("Dhonai")
    const [color, changecolor] = useState("blue")

    let changeName = () => {
        setvalue("virat")
    }
    let Changecolor = () => {
        changecolor("sky blue")
    }
    return (
        <div>

            <h1>{changes}</h1>
            <button onClick={changeName}></button>

            <h2>this is my Favarat color{color}</h2>
            {/* this  is usestate is  read only */}
            
            <button onClick={Changecolor}> color</button>
            {/* Update State
              To update our state, we use our state updater function.
             We should never directly update state. Ex: color = "red" is not allowed. */}

        </div>
    )
}

export default Usestate1
