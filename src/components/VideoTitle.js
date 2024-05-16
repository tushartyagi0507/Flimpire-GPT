import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pl-12 pt-96 absolute z-10 w-full aspect-video bg-gradient-to-r from-black' >
        <h1 className='text-6xl text-black'>{title}</h1>
        <p className='text-white text-md text-bold w-4/12 my-4'> {overview}</p>
        <button className='py-2 px-6 text-white bg-black bg-opacity-80 text-lg rounded-md'>▶️ Play</button>
        <button className='py-2 px-6 text-white bg-gray-300 bg-opacity-80 ml-4 text-lg rounded-md' >❕More Info</button>
    </div>
  )
}

export default VideoTitle