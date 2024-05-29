import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const MovieSuggestions = () => {
    const {movieResults, movieNames} = useSelector((store)=> store.gpt)
    if(!movieNames) return null 
    console.log(movieNames)
  return (
    <div className=' '>
       
       { movieNames.map((movie,index) =>{
        return <MovieList title={movie} key={movie} movies={movieResults[index]}/>
       }
        )
     } 
     </div>
  )
}

export default MovieSuggestions