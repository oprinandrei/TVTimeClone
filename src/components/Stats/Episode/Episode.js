import React from "react";
import "../../../assets/Episode.css";

const episode = (props) => {
    return <div className="Episode" key={props.episodeName}>
        <p>Ep. {props.index+1} - <i>"{props.episodeName}"</i></p>
        <p>{props.episodeDescription}</p>
        <p>Duration: {props.episodeDuration}</p>
    </div>

}

export default episode;