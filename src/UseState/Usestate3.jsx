import React from 'react'
import  {useState} from 'react'



 export const Usestate3 = () => {

     const [car , setcar]=useState({
        brand : "Tata",
        model :"Nexon",
        color :"white",
        year :"2023"
     });

     // Function to change the car brand
  const changeBrand = () => {
    setcar({
      ...car, //   it is an spreed operactor..... Keep the other car properties unchanged
      brand: 'TATA NEXON', // Update the brand name
    });
  };
     
   const changeColor = () =>{
    setcar({...car,color:"Blue"});
   }
  return (
    <div>
         <h1> this car is {car.brand}</h1>
         <button onClick={changeBrand}> change Brand Name</button>
         <h2> this color is {car.color}</h2>
         <button onClick={changeColor}> change color in car</button>
    </div>
  )
}

export default Usestate3
