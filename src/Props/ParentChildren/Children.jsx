import React from 'react';

export const Children = (props) => {

  // Accessing props passed from the parent component into child component
  const { message, user } = props;

  return (
    <div>

      <h1 className='chil'> Creating Child Component</h1>

      <p className='mes'>{message}</p>

      <p className='nam'>User Name: {user.name}</p>

      <p className='age'>User Age: {user.age}</p>

      <p className='rol'>User Role: {user.role}</p>

    </div>
  );
};

export default Children;



