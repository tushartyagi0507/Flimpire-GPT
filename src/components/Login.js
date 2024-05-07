
import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='
https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg'
alt='login-background' />
        </div>
        <form className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
          <h1 className='text-white '>Sign In</h1>
           <input type='text' placeholder='Email address' className='p-2 m-2 w-full'/>
           <input type='password' placeholder='Enter your password' className='p-2 m-2 w-full'/>
           <buton className="p-2 mt-2 bg-red-600 text-center text-white w-full">Submit</buton>
        </form>
    </div>
  )
}

export default Login