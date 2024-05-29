import React from 'react'
import { background } from '../utils/constants'
import GptSearchBar from './GptSearchBar'
// import { useSelector } from 'react-redux'
import MovieSuggestions from './MovieSuggestions'

const GptSearch = () => {

    // const {MovieNames} = useSelector((store)=> store.gpt)
//    if(!MovieNames) return null
  return (
    
    <div>
         
         <div className="fixed -z-10">
        <img className="h-screen object-cover" src={background} alt="logo" />
      </div>
      <div >
        <GptSearchBar />
        <MovieSuggestions/>
        </div>
      
  
           
  
    </div>
  )
}

export default GptSearch