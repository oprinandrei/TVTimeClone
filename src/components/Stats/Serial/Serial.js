import React from 'react';
import "../../../assets/Serial.css";
import Season from './../Season/Season';

const serial = (props) => {
  return (
    <div>
      <h1 className="SerialTitle">{props.serial.name}</h1>
      {props.serial.seasons.map(season => {
        return <Season season={season} expand={props.expand} click={props.click} key={season.episode[0].episodeDescription}/>
      })}
    </div>
  );
}

export default serial;