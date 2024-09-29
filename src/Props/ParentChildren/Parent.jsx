import React from 'react';
import {Children }from './Children'

 export const Parent = () => {

  // Data to be passed to the child component

  const message = "Calling Parent Component into Children Component";

  // call the parent component into child components...

    const user = {
    name: "Raghul",
    age: 23,
    role:"Front-end Developer",
    }

  return (
    <div>

      <h1 className='par'> Creating Parent Component</h1>

      {/* 
      Destructuring while receiving props children
      Passing props to the  ChildComponent  into parent components
      */}

        <h1>Destructuring while receiving props children</h1>
      <Children message={message} user={user} />

    </div>
  );
};

export default Parent;
