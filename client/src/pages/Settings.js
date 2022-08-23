import React, { useState } from 'react'
import Navbar from '../components/Navbar.js'
import { FiUploadCloud } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import AuthenticateModal from '../components/AuthenticateModal.js'

const Settings = () => {
  const styles = {
    settingsCover: '',
    settingsInrCover: '',
    monProfileCover: '',
    monProfil: '',
    dull_text: '',
    votrePhotoDeProfilCover: '',
    lhs: '',
    headTxt: '',
    midLhs: '',
    userIconCover: '',
    choseIconFrom: '',
    uploadPhoto: '',
    uploadDelPhoto: '',
    icons: '',
    rhs: '',
    rhsTxtCov: '',
    rhsTxt: '',
    userDetails: '',
    inputBox: '',
    textAreaBox: '',
    modifyBox: '',
    instituteBox: '',
    modifyBtn: '',
    inputUserDetails: '',
    showUserDetails: '',
    showUserHeader: '',
    header_lft: '',
    locationCover: '',
    bioCover: '',
    bio: '',
    email: '',
    emailCover: '',
  }
  /* function to be made: 
  handleModify(make modal visible asking for password), 
  updatePassword(asking current and new password confirm password,
    forgot password link - ask username (later phone no. required) => generate link with userId(to let know backend for whom we are updating password) and tokenId(to confirm session even exists or not) on mail => user clicks => new password confirm password)
  , uploadProfilePic, delProfilePic */
  /* a piece of code which generates random images */
  const user = {
    username:'pryansh',
    email:'pryanshukla0321@gmail.com',
    // 
    profilePic:'',
    profession:'dev',
    institute:'college student',
    lives_in: 'lucknow',
    aboutMe:'hi i am garry pista masala',
  }
  const [profilePic, setProfilePic] = useState('')
  const [profession, setProfession] = useState('')
  const [institute, setInstitute] = useState('')
  const [aboutMe, setAboutMe] = useState('')
  const [lives_in, setLives_in] = useState('')
  const [password, setPassword] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [isModal, setIsModal] = useState(false)
  // 
  
  return (
    <div className='flex'>
      <Navbar/>
      <div className={styles.settingsCover}>
        <div className={styles.settingsInrCover}>
          {/* 1/3 div */}
          <div className={styles.monProfileCover}>
            <h1 className={styles.monProfil}>Mon profil</h1>
            <p className={styles.dull_text}>{user.aboutMe}</p>
          </div>
          {/* 2/3 div */}
          <div className={styles.votrePhotoDeProfilCover}>
            {/* lhs */}
            <div className={styles.lhs}>
              <h2 className={styles.headTxt}></h2>
              <div className={styles.midLhs}>
                {/* profile Icon */}
                <div className={styles.userIconCover}>
                  <img src={''} alt='your profile'/>
                </div>
                {/* upload remove profile pic */}
                <div className={styles.choseIconFrom}>
                  <button className={styles.uploadPhoto}>
                    <FiUploadCloud className={styles.icons}/>
                    change the photo
                  </button>
                  <button className={styles.uploadDelPhoto}>
                    <AiOutlineDelete className={styles.icons}/>
                    remove
                  </button>
                </div>
              </div>
              <p className={styles.dull_text}></p>
            </div>
            {/* rhs */}
            <div className={styles.rhs}>
              <div className={styles.rhsTxtCov}>
                <div className={styles.rhsTxt}>
                  <h2 className={styles.headTxt}></h2>
                  <p className={styles.dull_text}></p>
                </div>
                <div>
                  {/* random image will be shown from catalogue */}
                </div>
              </div>
            </div>
          </div>
          {/* 3/3 div */}
          <div className={styles.userDetails}>
            {editMode ? (
              <div className={styles.inputUserDetails}>
                <label for='profession' className={styles.dull_text}>profession:</label>
                <input 
                  id='profession'
                  type= 'text'
                  className={styles.inputBox}
                  value = {profession}
                  onChange = {(e)=>{setProfession(e.target.value)}}/>
                <div className={styles.modifyBox}>
                  <div className={styles.instituteBox}>
                    <label for='institute' className={styles.dull_text}>institute:</label>
                    <input 
                      id='institute'
                      type= 'text'
                      className={styles.inputBox}
                      value = {institute}
                      onChange = {(e)=>{setInstitute(e.target.value)}}/>
                  </div>
                  <button onClick={()=>{setIsModal(true)}} className={styles.modalBtn}>
                    Apply changes
                    {/* make a useEffect */}
                  </button>
                </div>
                <label for='aboutMe' className={styles.dull_text}>Bio:</label>
                <textarea 
                  id='aboutMe'
                  type= 'text'
                  className={styles.textAreaBox}
                  value = {aboutMe}
                  onChange = {(e)=>{setAboutMe(e.target.value)}}/>
                <label for='lives_in' className={styles.dull_text}>lives in:</label>
                <input 
                  id='lives_in'
                  type= 'text'
                  className={styles.inputBox}
                  value = {lives_in}
                  onChange = {(e)=>{setLives_in(e.target.value)}}/>
                  </div>
                ) : (
                  <div className={styles.showUserDetails}>
                    {/* username  location
                        profession (eng) at institute

                        bio: 

                        your registered email id
                        
                     */}
                     <div className={styles.showUserHeader}>
                      <div className={styles.header_lft}></div>
                      <div className={styles.locationCover}></div>
                     </div>
                     <div className={styles.bioCover}>
                      <p className={styles.bio}></p>
                      <button onClick={()=>{setEditMode(true)}} className={styles.modifyBtn}>
                        Modify
                      </button>
                     </div>
                     <div className={styles.emailCover}>
                      <p className={styles.dull_text}>your registered email-id</p>
                      <p className={styles.email}></p>
                     </div>
                  </div>
                )}
          </div>
        </div>
        {/* set modal */}
        {isModal && (
          <AuthenticateModal/>
        )}
      </div>
    </div>
  )
}

export default Settings