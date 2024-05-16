import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    
  const movies = useSelector((store)=> store?.movies)
  
  return (
    <div>
      <MovieList movies={movies.nowPlayingMovies} title={"Now Playing Movies"} />
      <MovieList movies={movies.nowPlayingMovies} title={"Popular"} />
      <MovieList movies={movies.nowPlayingMovies} title={"Top-Rated"} />
      <MovieList movies={movies.nowPlayingMovies} title={"Upcoming"} />
    </div>
  )
}

export default SecondaryContainer