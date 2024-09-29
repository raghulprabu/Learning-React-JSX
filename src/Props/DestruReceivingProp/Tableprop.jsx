import React from 'react';
import PropTypes from 'prop-types';

export const Employe = (props) => {
  return (
    <div className='employe'>

      <h1>Destructuring while receiving props</h1>
      
      <table>
        <tbody>

          <tr>
            <th>Name</th>
            <td>{props.myname}</td>
          </tr>

          <tr>
            <th>Role</th>
            <td>{props.role}</td>
          </tr>

          <tr>
            <th>Framework</th>
            <td>{props.Framework}</td>
          </tr>

          <tr>
            <th>Experiences</th>
            <td>{props.exp}</td>
          </tr>

        </tbody>

      </table>
    </div>
  );
}

Employe.propTypes = {
  myname: PropTypes.string,
  role: PropTypes.string,
  Framework: PropTypes.string,
  exp: PropTypes.string,
};

export default Employe;
