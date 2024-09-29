import React, { useState } from "react";

export const Usestate = () => {

     const [change, setChange] = useState(true);
	 //& state variable    updator function    initial value    

    // const [change, setChange] = useState(false);
  return (
    <>

        <div className="div">
		<button className="button" onClick={() => setChange(!change)}>
	    Click Here!
		</button>
		{change ? (
 	 	<h1 className="one">Welcome to usestate</h1>
			) : (
			<h1 className="two"> start to learn Usestate Front-End development</h1>
		)}
      	</div>
    </>
  )
}

export default Usestate
