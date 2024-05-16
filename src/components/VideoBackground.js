import { useState } from "react";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const VideoBackground = ({ movieId }) => {
  const [mute, setmute] = useState(1);

  const handleMute = ()=>{
    setmute(!mute)
  }

  const id = useSelector((store) => store?.movies?.trailer?.key);
  useMovieTrailer(movieId);
  return (
    <div>
      {/* {console.log(mute)} */}
      <iframe
        className="w-screen h-screen"
        src={
          "https://www.youtube.com/embed/" +
          id +
          "?&autoplay=1&mute=" +
          mute 
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div className="absolute text-2xl text-white left-[90%] top-[61%] z-10">
        <button onClick={handleMute}>
          {mute ? <FontAwesomeIcon icon={faVolumeXmark} />  : <FontAwesomeIcon icon={faVolumeHigh}/>}
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;
