import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

        const movies = useSelector((store)=> store?.movies?.nowPlayingMovies)
  // console.log(movies);
 if(!movies) return 
        const mainMovie = movies[1]
        // console.log(mainMovie)

        const {original_title, overview, id } = mainMovie;
  return (
    <div className='bg-black pt-[25%] min-[500px]:pt-[20%] sm:pt-[15%] md:pt-[4%] lg:pt-[2%]'>
       <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  ) 
}

export default MainContainer