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
      className=" absolute z-10 w-full aspect-video pt-[10%] sm:pt-[10%]
    md:pl-12 md:pt-[12%] xl:bg-gradient-to-r from-black"
    >
      <h1 className="text-2xl text-white text-bolder sm:3xl md:text-4xl lg:text-6xl">{title}</h1>
      <p className="text-white text-xs text-bold w-5/12 my-4 
      sm:text-md md:text-lg sm:w-5/12 md:w-6/12 sm:block"> {overview}</p>
      <button
        className="py-2 px-2 text-black bg-white text-sm rounded-md hover:bg-opacity-80
        max-[400px]:hidden
        md:text-lg md:px-6"
      >
        ▶️ Play
      </button>
      <button className="py-2 px-2 text-white bg-gray-500 bg-opacity-80 ml-4 text-sm rounded-md
      md:text-lg md:px-6  max-[400px]:hidden">
        ❕More Info
      </button>
      
        <button onClick={handleMute}
        className="absolute text-lg text-white z-10 ml-4
       md:text-2xl  max-[400px]:hidden"
        >
          {mute ? <FontAwesomeIcon icon={faVolumeXmark} />  : <FontAwesomeIcon icon={faVolumeHigh}/>}
        </button>

    </div>
  );
};

export default VideoTitle;
