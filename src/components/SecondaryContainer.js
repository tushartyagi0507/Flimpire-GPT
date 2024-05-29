import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    
  const movies = useSelector((store)=> store?.movies)
  
  return (
    movies.nowPlayingMovies && 
    <div className='bg-black overflow-hiden'>
   <div>
      <MovieList movies={movies.nowPlayingMovies} title={"Now Playing Movies"} />
      <MovieList movies={movies.popularMovies} title={"Popular"} />
      <MovieList movies={movies.topRatedMovies} title={"Top-Rated"} />
      <MovieList movies={movies.upcomingMovies} title={"Upcoming"} />
   </div>
    </div>
  )
}

export default SecondaryContainer