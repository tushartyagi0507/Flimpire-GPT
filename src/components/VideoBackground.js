import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    const id = useSelector((store)=> store?.movies?.trailer?.key)
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe 
      className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + id} 
        title="YouTube video player"
        allow="autoplay; "
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
