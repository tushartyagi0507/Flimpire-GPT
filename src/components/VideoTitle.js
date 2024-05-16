import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pl-12 pt-72 absolute z-10 w-full aspect-video bg-gradient-to-r from-black' >
        <h1 className='text-6xl text-white'>{title}</h1>
        <p className='text-white text-md text-bold w-4/12 my-4'> {overview}</p>
        <button className='py-2 px-6 text-black bg-white text-lg rounded-md hover:bg-opacity-80'>▶️ Play</button>
        <button className='py-2 px-6 text-white bg-gray-500 bg-opacity-80 ml-4 text-lg rounded-md' >❕More Info</button>
    </div>
  )
}

export default VideoTitle 