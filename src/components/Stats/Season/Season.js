import React from "react";
import Episode from "../Episode/Episode";
import "../../../assets/Season.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp ,faChevronCircleDown} from '@fortawesome/free-solid-svg-icons';


const season = (props) => {

    if (props.expand){
        return <div className="Season">
        <p><b>{props.season.seasonName}</b><FontAwesomeIcon onClick={props.click} icon={faChevronCircleUp} className='FontAwesomeSize'/></p>
          {props.season.episode.map((episode,index) => {
        return <Episode
        index={index} 
        episodeName={episode.episodeName} 
        episodeDescription={episode.episodeDescription}
        episodeDuration={episode.episodeDuration}
        key={episode.episodeName}
        />
        }) 
        
        }
    </div>
    }
    else {
        return <div className="Season">
        <p><b>{props.season.seasonName}</b><FontAwesomeIcon onClick={props.click} icon={faChevronCircleDown} className='FontAwesomeSize'/></p>
        </div>
    }
    

}

export default season;