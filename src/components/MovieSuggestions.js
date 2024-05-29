import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const MovieSuggestions = () => {
    const {movieResults, movieNames} = useSelector((store)=> store.gpt)
    if(!movieNames) return null 
    console.log(movieNames)
  return (
    <div className='mt-36 pb-6 bg-black text-white bg-opacity-80 w-10/12  mx-auto
    md:mt-20'>
       <div className='relative top-52'>
       { movieNames.map((movie,index) =>{
        return <MovieList title={movie} key={movie} movies={movieResults[index]}/>
       }
        )
     } 
     </div>
     </div>
  )
}

export default MovieSuggestions