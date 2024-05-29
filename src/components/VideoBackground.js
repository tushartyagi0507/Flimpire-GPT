import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {  

  const mute = useSelector((store)=> store.movies.isMute)
  const id = useSelector((store) => store?.movies?.trailer?.key);
  useMovieTrailer(movieId);
  return (
    <div>
      {/* {console.log(mute)} */}
      <iframe
        className="w-screen aspect-video
        md:w-screen md:h-screen"
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
      
    </div>
  );
};

export default VideoBackground;
