import React from 'react'
import logo from '../assets/passionFruit.png'
import user_profile from '../assets/user_profile.png'
import { GoHome } from 'react-icons/go';
import { IoIosLogIn } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import './generalUtilities.css'

const Navbar = () => {
  const style = {
    "loginBtn": "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
    "logo": "w-24",
    "navbar_container": "border-r border-slate-600 h-screen bg-red-200 flex flex-col justify-between",
    "icons": "",
    "pseudoElement_hz": "",
  }
  const user = true
  const userProfilePic = !user? user_profile : user.profilePic 
  return (
    <div className= {style.navbar_container}>
      <img src= {logo} alt='logo- passion fruit' className= {style.logo}/>
      <div>
        <IconContext.Provider value={{color: 'grey', size: '25px'}}>
          <GoHome/>
          <FiSettings/>
          <BsBookmark/>
        </IconContext.Provider>
        {/* pseudo element */}
        <div className='hz_line'></div>
        <i className="fa-solid fa-feather"></i>
      </div>
      <div>
        <button type="button" className= {style.loginBtn}>
        <IconContext.Provider value={{color: 'grey', size: '25px'}}>
          <IoIosLogIn/>
        </IconContext.Provider>
        login/<br/>
        register</button>
      </div>
      <div>
        <img src= {userProfilePic} alt='user profilePic'/>
        {/* PF + user.profilePic */}
      </div>
    </div>
  )
}

export default Navbar