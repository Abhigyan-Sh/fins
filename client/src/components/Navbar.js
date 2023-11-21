import React, { useContext } from 'react'
import logo from '../assets/passionFruit.png'
import { GoHome } from 'react-icons/go';
import { IoIosLogIn,IoMdNotificationsOutline, IoIosLogOut } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { FaFeather } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { NoteContext } from '../context/NoteContext';

const Navbar = () => {
  const style = {
    "navbar_container": "border-r-1 h-screen flex flex-col justify-between items-center overflow-hidden sticky top-0",
    "logo": "w-24 mt-9",
    "navIconsCov": "flex flex-col justify-between items-center gap-y-16",
    "loginBtn": "py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
    'profile_icon':'rounded-full w-12 h-12 mb-8',
    'nonValidIcons': 'cursor-not-allowed',
    'navIcons': 'active:fill-black !important',
  }
  const { user } = useContext(NoteContext)
  const navigator = useNavigate()
  const PF = 'http://localhost:8000/image/'
  const toLoginPg = () => {
    navigator('/login')
  }
  const toLogoutPg = () => {
    localStorage.removeItem('user_token')
    window.location.replace('http://localhost:3000/') // reloads code (hence user not sets when used somewhere earlier)
  }
  return (
    <div className= {style.navbar_container}>
      <Link to='/'>
        <img src= {logo} alt='logo- passion fruit' className= {style.logo}/>
      </Link>
      <div className= {style.navIconsCov}>
        <IconContext.Provider value={{color: 'grey', size: '25px'}}>
          <Link to='/'><GoHome className={style.navIcons}/></Link>
          <Link to='/settings/'><FiSettings className={style.navIcons}/></Link>
          <BsBookmark className= {style.nonValidIcons}/>
          <IoMdNotificationsOutline className= {style.nonValidIcons}/>
        </IconContext.Provider>
        
        <IconContext.Provider value={{color: 'grey', size: '25px'}}>
          <Link to={`/write/`}><FaFeather className={style.navIcons}/></Link>
        </IconContext.Provider>
      </div>
      {!user ? (
        <div>
          <button type="button" className= {style.loginBtn} onClick={toLoginPg}>
            <IconContext.Provider value={{color: 'grey', size: '25px'}}>
              <IoIosLogIn/>
            </IconContext.Provider>
            login/<br/>
            register
          </button>
        </div>
        ) : (
          <button type="button" className= {style.loginBtn} onClick={toLogoutPg}>
            <IconContext.Provider value={{color: 'grey', size: '25px'}}>
              <IoIosLogOut/>
            </IconContext.Provider>
            logout
          </button>
        )}
        <Link to='/settings/'>
          { user ? (
            <img src= {PF + user.profilePic} className={style.profile_icon} alt='profile icon'/>
          ) : (
            <img src= {PF + 'user_profile.png'} className={style.profile_icon} alt='profile icon'/>
          )}
        </Link>
    </div>
  )
}

export default Navbar