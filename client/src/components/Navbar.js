import React, { useEffect, useState } from 'react'
import logo from '../assets/passionFruit.png'
import { GoHome } from 'react-icons/go';
import { IoIosLogIn,IoMdNotificationsOutline } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons'
/* import axios from 'axios'; */

const Navbar = () => {
  const style = {
    "loginBtn": "py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
    "logo": "w-24 mt-9",
    "navbar_container": "border-r border-slate-600 h-screen w-24 flex flex-col justify-between items-center overflow-hidden",
    "navIcons": "flex flex-col justify-between items-center gap-y-16",
    "writeIcon": "before:content-[''] before:ml-0.5 before:mb-10 before:w-full h-px bg-zinc-300 fa-solid fa-feather self-center text-gray-500 text-2xl mb-8",
    'profile_icon':'rounded-full w-12 h-12 mb-8'
  }
  const user = {}
  const PF = 'http://localhost:8000/image/'
  if (!user.profilePic) {
    user.profilePic = 'user_profile.png'
  }
  /* // BELOW CODE IS FOR TESTING PURPOSE ONLY 
  const [userIcon, setUserIcon] = useState('')
  useEffect(() => {
    const getUserImg = async () => {
      const res = await axios.get(`/userPic/${user.profilePic}`)
      setUserIcon(res)
    }
    getUserImg()
  }, [])
  // TILL HERE TESTING EXISTED */
  return (
    <div className= {style.navbar_container}>
      <img src= {logo} alt='logo- passion fruit' className= {style.logo}/>
      <div className= {style.navIcons}>
        <IconContext.Provider value={{color: 'grey', size: '25px'}}>
          <GoHome/>
          <FiSettings/>
          <BsBookmark/>
          <IoMdNotificationsOutline className= {style.icons}/>
        </IconContext.Provider>
        {/* pseudo element along icon */}
        <i className={style.writeIcon}/>
      </div>
      <div className=''>
        <button type="button" className= {style.loginBtn}>
          <IconContext.Provider value={{color: 'grey', size: '25px'}}>
            <IoIosLogIn/>
          </IconContext.Provider>
          login/<br/>
          register
        </button>
      </div>
      <img src= {PF + user.profilePic} className={style.profile_icon} alt='profile icon'/>
    </div>
  )
}

export default Navbar