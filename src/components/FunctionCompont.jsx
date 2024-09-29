//? Function Components Syntax

// import React from 'react'

//  export const FunctionCompont = () => {
//   return (
//     <>
//     <div>
//         <h1 className='Fc'> Function Components </h1>
//     </div>
//     </>
//   )
//  }

//  export default FunctionCompont;

//& Function Components using jsx rule

  import React from 'react'
   export const FunctionCompont = () => {
  let a = "start to learn Functional Component"
  return (
    <div>

      <h1 className='Fc'>Hello Function</h1>

      { /* In JSX in order access the variable we need to wrap them with */}
         <h2 className='jsx'>{a}</h2>
    </div>
    )
   }
   export default FunctionCompont;



//!  Usig Rect Dom 

//    import React from "react";
//    import ReactDOM from "react-dom";

//! This is a functional component

//    const Welcome = (props) => {
//     return <h1>Hello World!{props.name}</h1>;
//     };

//     ReactDOM.render(
//     <Welcome />,
//     document.getElementById("root")
//      );

  
    
  //    Let us see step-wise what is happening in the above example: 

  //    We call the ReactDOM.render() as the first parameter.
  //    React then calls the component Welcome, which returns <h1>Hello World!</h1>; as the result.
  //    then the ReactDOM efficiently updates the DOM to match 
  //    with the returned element and renders that element to the DOM element with id as “root”.

  


 





