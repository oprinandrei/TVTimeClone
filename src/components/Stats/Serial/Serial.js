import React from 'react';

import Season from './../Season/Season'

const serial = (props) => {
  return (
    <div>
      <h1>{props.serial.name}</h1>
      {props.serial.seasons.map(season => {
        return <Season season={season}/>
      })}
    </div>
  );
}

export default serial;