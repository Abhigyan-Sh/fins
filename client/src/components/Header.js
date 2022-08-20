import React, { useState } from 'react'
import logo from '../assets/passionFruit.png'
import { CgOptions } from 'react-icons/cg'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Modal from '../components/Modal.js'

const Header = ({postProps}) => {
    const styles = {
        headerCover: 'flex items-center justify-center',
        headerInrCover: 'px-3 py-1 w-8/12 flex items-center justify-between',
        lftHeader: 'flex items-center font-normal text-sm',
        logo: 'h-16 w-16 cursor-pointer',
        rgtHeader: 'flex items-center',
        publishBtn: 'text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-xl text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2',
        iconsCover: 'flex items-center',
        icons: 'w-6 h-6 ml-5 text-gray-400 cursor-pointer',
        userIcon: 'w-8 h-8 rounded-full ml-5 cursor-pointer',
    }
    const PF = 'http://localhost:8000/image/'
    const user = {}
    if (!user.profilePic) {
        user.profilePic = 'user_profile.png'
    }
    const [openModal, setOpenModal] = useState(false)
  return (
    <div className={styles.headerCover}>
        {/* inner Cover */}
        <div className={styles.headerInrCover}>
            {/* lftHeader */}
            <div className={styles.lftHeader}>
                <img src={logo} className={styles.logo} alt='logo'></img>
                <p>Draft</p>
            </div>
            {/* rgtHeader */}
            <div className={styles.rgtHeader}>
                <button onClick={() => {setOpenModal(true)}} className={styles.publishBtn}>
                    publish</button>
                <div className={styles.iconsCover}>
                    <IoMdNotificationsOutline className={styles.icons}/>
                    <CgOptions className={styles.icons}/>
                </div>
                <div>
                    <img src={PF + user.profilePic} className={styles.userIcon} alt='user'/>
                </div>
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