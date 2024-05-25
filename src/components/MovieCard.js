import React from 'react'
import { CDN_IMG } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    // console.log(CDN_IMG+posterPath)
  return (
    <div className='w-48 pr-2'>
        <img alt="movie logo" src={CDN_IMG + posterPath}/>
    </div>
  )
}

export default MovieCard