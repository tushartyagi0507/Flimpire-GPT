import React from 'react'
import { project_logo } from '../utils/constants'

const Footer = () => {
  return (
    <div className=' sticky bottom-40 bg-black w-full -pb-16 mt-4'>
    
 <div className='flex justify-between text-gray-500'>
 <div className='w-28 ml-12'>
        <img src={project_logo}
        alt="project logo"/>
    </div>
    <div className='hover:underline'>
        <span className='mr-6 '>About</span>
        <span className='mr-6 '>Privacy Policy</span>
        <span className='mr-6 '>Contact</span>
    </div>
 </div>
 <div className='text-white w-full mx-12'>
____________________________________________________________________________________________________________________________________________________________
</div>
<div className='text-center text-white mt-4'>
    Created By- <a href="https://www.linkedin.com/in/tushartyagi0507" target='_blank' 
    rel='noreferrer'
    className='hover:underline'>Tushar Tyagi with ♥️ </a>
</div>
        </div>
  )
}



export default Footer