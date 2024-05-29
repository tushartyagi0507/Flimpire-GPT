import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import {addMute} from "../utils/movieSlice"


const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();

  const handleMute = ()=>{
    dispatch(addMute())
  }
  
  const mute = useSelector((store)=> store.movies.isMute)
  return (
    <div
      className="p-2 absolute z-10 w-full aspect-video 
    md:pl-12 md:pt-72 lg:bg-gradient-to-r from-black"
    >
      <h1 className="text-xl text-white text-bolder md:text-6xl">{title}</h1>
      <p className="text-white text-xs text-bold w-5/12 my-4
      md:text-lg md:w-4/12"> {overview}</p>
      <button
        className="py-2 px-2 text-black bg-white text-sm rounded-md hover:bg-opacity-80
        md:text-lg md:px-6"
      >
        ▶️ Play
      </button>
      <button className="py-2 px-2 text-white bg-gray-500 bg-opacity-80 ml-4 text-sm rounded-md
      md:text-lg md:px-6">
        ❕More Info
      </button>
      
        <button onClick={handleMute}
        className="absolute text-lg text-white z-10 ml-4
       md:text-2xl"
        >
          {mute ? <FontAwesomeIcon icon={faVolumeXmark} />  : <FontAwesomeIcon icon={faVolumeHigh}/>}
        </button>

    </div>
  );
};

export default VideoTitle;
