import React from "react";

const episode = (props) => {
    return <div className="Episode" key={props.episodeName}>
        <p>{props.episodeName}</p>
        <p>{props.episodeDescription}</p>
        <p>{props.episodeDuration}</p>
    </div>

}

export default episode;