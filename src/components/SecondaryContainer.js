import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    
  const movies = useSelector((store)=> store?.movies)
  
  return (
    movies.nowPlayingMovies && 
    <div className='bg-black overflow-hiden pt-[61%]
    md:m-0 md:p-0'>
   <div>
      <MovieList movies={movies.nowPlayingMovies} title={"Now Playing Movies"} />
      <MovieList movies={movies.popularMovies} title={"Popular Movies"} />
      <MovieList movies={movies.topRatedMovies} title={"Top-Rated Movies"} />
      <MovieList movies={movies.upcomingMovies} title={"Upcoming Movies"} />
   </div>
    </div>
  )
}

export default SecondaryContainer