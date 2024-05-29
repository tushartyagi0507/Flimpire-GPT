import React from 'react'
import { CDN_IMG } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
    // console.log(CDN_IMG+posterPath)
  return (
    <div className='w-32 pr-2
    md:w-48'>
        <img alt="movie logo" src={CDN_IMG + posterPath}/>
    </div>
  )
}

export default MovieCard