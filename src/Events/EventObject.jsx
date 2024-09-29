import React from 'react'

 export function EventObject() {

  const Shoot = (a, b) => {
    alert(b.type);
  }
  return (
    <div>
      <h1>Event Object </h1>
      <button className="button" onClick={(event) => Shoot("Goal!", event)}>Take the shot!</button>
    </div>
  );
}
export default EventObject
