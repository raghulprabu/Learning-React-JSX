import React from 'react'
import Getprop from './Getprop'


 export const Prop = () => {
  
   const items =["parent","Child","Default prop"]

   const isloggin = false

   const gretting = isloggin ? <h2>  You Get Loggin in jsx feature</h2> : <h2>  Not get loggin </h2>

  return (
    <>
        <h1 className='pr'> the default Props</h1>

        <Getprop start="React JSX in default props"  learn="Default props"/>
        {/*The component receives the argument as a props object:*/}

        <div>
        <ul className='ul'>

          {items.map((item,index) =>
          (<li key={index}>{item}</li>)
          )}
          {/* Use the array to list in props */}
        </ul>
        </div>

        {gretting}
        
    </>
  );
};

export default Prop
