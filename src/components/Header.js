import React from 'react'
import {auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

const user = useSelector((store) => store.user)

  const handleSingOut = ()=>{
signOut(auth).then(() => {
  navigate("/")
  dispatch(removeUser())
}).catch((error) => {
  navigate("/error")  // you can create an error page here
});

  }
  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-20 flex justify-between'>
        <div className='w-44 ml-44 mt-4'>
            <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            alt='logo'/>
             </div>
            { user && <div className='flex mr-20 mt-6'>
            <img src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4'
            alt='signout-icon'
            className='w-10 h-10'/> 
            <button className='text-white font-bold align-middle w-18 h-10'
            onClick={handleSingOut}> (Sign Out)</button>
        </div>
}
    </div>
  )
}

export default Header