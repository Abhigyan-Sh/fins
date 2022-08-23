import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CgOptions } from 'react-icons/cg'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { NoteContext } from '../context/NoteContext.js'
import logo from '../assets/passionFruit.png'
import Modal from '../components/Modal.js'

const Header = ({postProps}) => {
    const styles = {
        headerCover: 'flex items-center justify-center',
        headerInrCover: 'px-3 py-1 w-8/12 flex items-center justify-between',
        lftHeader: 'flex items-center font-normal text-sm',
        logo: 'h-16 w-16 cursor-pointer',
        rgtHeader: 'flex items-center',
        publishBtn: 'text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-xl text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2',
        disabledPublishBtn: 'text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-xl text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 opacity-50 cursor-not-allowed',
        iconsCover: 'flex items-center',
        icons: 'w-6 h-6 ml-5 text-gray-400 cursor-pointer cursor-not-allowed',
        userIcon: 'w-8 h-8 rounded-full ml-5 cursor-pointer',
    }
    const PF = 'http://localhost:8000/image/'
    const { user } = useContext(NoteContext)
    if (!user.profilePic) {
        user.profilePic = 'user_profile.png'
    }
    const [openModal, setOpenModal] = useState(false)
    if (postProps.title && postProps.desc) {
        styles.disabledPublishBtn = styles.publishBtn
    }
  return (
    <div className={styles.headerCover}>
        {/* inner Cover */}
        <div className={styles.headerInrCover}>
            {/* lftHeader */}
            <div className={styles.lftHeader}>
                <Link to='/'>
                    <img src={logo} className={styles.logo} alt='logo'></img>
                </Link>
                <p>Draft</p>
            </div>
            {/* rgtHeader */}
            <div className={styles.rgtHeader}>
                <button onClick={() => {setOpenModal(true)}} className={styles.disabledPublishBtn}>
                    publish</button>
                <div className={styles.iconsCover}>
                    <IoMdNotificationsOutline className={styles.icons}/>
                    <CgOptions className={styles.icons}/>
                </div>
                <Link to='/settings'>
                    <img src={PF + user.profilePic} className={styles.userIcon} alt='user'/>
                </Link>
            </div>
        </div>
        {/* Modal */}
        {openModal && (
            <Modal postProps= {postProps} closeModal={setOpenModal}/>
        )}
    </div>
  )
}

export default Header