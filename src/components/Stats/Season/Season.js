import React from "react";
import Episode from "../Episode/Episode";

const season = (props) => {
    return <div className="Season">
        <p>{props.season.seasonName}</p>
          {props.season.episode.map(episode => {
        return <Episode 
        episodeName={episode.episodeName} 
        episodeDescription={episode.episodeDescription}
        episodeDuration={episode.episodeDuration}
        key={episode.episodeName}
        />
        }) 
        
        }
    </div>

}

export default season;