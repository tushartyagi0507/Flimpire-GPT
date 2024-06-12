import React from 'react'
import { project_logo } from '../utils/constants'

const Footer = () => {
  return (
    <div className=' sticky bottom-40 bg-black w-full -pb-16 mt-4'>
    
 <div className='flex flex-col text-gray-500
 md:flex md:flex-row md:justify-between'>
 <div className='w-28 mx-auto
      md:w-28 md:ml-12'>
        <img src={project_logo}
        alt="project logo"/>
    </div>
    <div className='hover:underline mt-2 flex justify-evenly
    md:m-0'>
        <span className='md:mr-6 '>About</span>
        <span className='md:mr-6 '>Privacy Policy</span>
        <span className='md:mr-6 '>Contact</span>
    </div>
 </div>
 <div className='text-white w-11/12 mx-auto'>
 <hr className="my-6 border-white lg:my-8" />
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