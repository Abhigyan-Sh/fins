import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar.js'
import { FiUploadCloud } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'
import { AiOutlineDelete } from 'react-icons/ai'
import AuthenticateModal from '../components/AuthenticateModal.js'
import { NoteContext } from '../context/NoteContext.js'
import msgImg from '../assets/msg.webp'
import axios from '../axios.js'

const Settings = () => {
  const styles = {
    settingsCover: 'bg-orange-20 h-screen w-screen',
    settingsInrCover: 'flex flex-col w-8/12 m-auto mt-14',
    monProfileCover: 'bg-orange-10 p-4',
    monProfil: 'font-karla text-2xl font-bold text-col-txt mb-1',
    dull_text: 'text-zinc-500 font-semibold text-sm cursor-pointer',
    votrePhotoDeProfilCover: 'flex bg-orange-30 mt-20 p-4',
    lhs: 'flex flex-col basis-2/4',
    headTxt: 'font-karla text-2xl font-bold text-col-txt mb-1',
    midLhs: 'flex p-2 mb-4 bg-orange-10 justify-between items-center',
    userIconCover: '',
    userIcon: 'w-32 h-32 rounded-full',
    choseIconFrom: 'flex flex-col bg-zinc-20 gap-2',
    uploadPhoto: 'bg-purple-700 text-sm border-2 border-zinc-500 rounded-lg flex justify-around items-center py-3 text-white font-semibold px-2 hover:bg-purple-800 cursor-pointer',
    uploadDelPhoto: 'bg-white text-base border-2 border-zinc-500 rounded-lg flex justify-around items-center py-3 hover:text-medium-red font-semibold cursor-pointer',
    icons: 'mx-2 text-2xl',
    rhs: 'basis-2/4',
    rhsImgCov: 'flex justify-center items-center',
    rhsImg: 'w-80',
    // details
    userDetailsCov: 'p-4 mb-8',
    // FOLLOWING WITH EDIT MODE:
    inputDetailsCov: 'flex',
    lft_userDetails: 'basis-2/4',
    rgt_userDetails: 'flex flex-col',
    rgt_userDetails: 'basis-2/4 flex gap-2 justify-center items-start',
    inputBox: 'p-2 rounded-lg m-2 bg-zinc-100 w-8/12',
    BtnO: 'border-2 border-zinc-500 rounded-lg py-3 text-col-txt font-semibold px-4 h-fit bg-zinc-100 hover:bg-zinc-200 tracking-wider',
    msg: 'text-rose-600 font-semibold p-2 text-lg',
    // BELOW WITH NO EDIT MODE
    userNlocationCov: 'flex justify-between items-end w-fit gap-2',
    username: 'text-xl font-poppins font-semibold text-col-txt',
    locationBox: 'flex justify-between items-end text-zinc-500 font-semibold text-xs gap-1',
    highlight: 'text-cyan-500 font-semibold',
    bioCover: 'flex my-4 items-center',
    bio: 'w-5/12',
    email: 'italic',
  }
  const context = useContext(NoteContext)
  /*  */
  const [profilePic, setProfilePic] = useState(context.user.profilePic)
  const [profession, setProfession] = useState(context.user.profession)
  const [institute, setInstitute] = useState(context.user.institute)
  const [aboutMe, setAboutMe] = useState(context.user.aboutMe)
  const [lives_in, setLives_in] = useState(context.user.lives_in)
  const userObj = {
    userId: context.user._id,
    profilePic,profession,institute,aboutMe,lives_in,
  }
  /*  */
  const [editMode, setEditMode] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [file, setFile] = useState('')
  const [msg, setMsg] = useState('')
  const PF = 'http://localhost:8000/image/'

  const applyChanges = async (e, n) => {
    if (n === 0) return
    e.preventDefault()
    // adding profilePic to server N userObj.profilePic
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      userObj.profilePic = filename;
      try {
        await axios.post("/api_v1/upload/profilePic", data);
      } catch (err) {
          console.log(err)
      }
    }
    axios.patch(`/user/${context.user._id}`, userObj)
    .then((res) => {
      /* console.log(res) */
      context.setToken(res.data)
      /* console.log(context.token) */
      setEditMode(false)
      /* instead of this below code, doing a recursive call which works
      window.location.replace('http://localhost:3000/login/') */
      applyChanges(e, n-1)
    })
    .catch((err) => {
      setMsg(err.response.data)
    })
  }
  /* console.log(context.user.profilePic) */
  if(!context.user.profilePic) {
    context.user.profilePic = 'user_profile.png'
  }
  const removeProfilePic = () => {
    setFile('')
    userObj.profilePic = ''
    setEditMode(true)
  }
  return (
    <div className='flex'>
      <Navbar/>
      <div className={styles.settingsCover}>
        <div className={styles.settingsInrCover}>
          {/* 1/3 div */}
          <div className={styles.monProfileCover}>
            <h1 className={styles.monProfil}>Mon profil</h1>
            <p className={styles.dull_text}>this is about me, none of its is about you!</p>
            {/* <p className={styles.dull_text}>{user.aboutMe}</p> */}
          </div>
          {/* 2/3 div */}
          <div className={styles.votrePhotoDeProfilCover}>
            {/* lhs */}
            <div className={styles.lhs}>
              {/* head */}
              <h2 className={styles.headTxt}>Your profile</h2>
              {/* body */}
              <div className={styles.midLhs}>
                {/* profile Icon */}
                <div className={styles.userIconCover}>
                  { file ? (
                    <img src={URL.createObjectURL(file)} className={styles.userIcon} alt='your profile'/>
                  ) : (
                    <img src={PF + context.user.profilePic} className={styles.userIcon} alt='your profile'/>
                  )}
                </div>
                {/* upload remove profile pic */}
                <div className={styles.choseIconFrom}>
                  {/* update profilePic */}
                  <label htmlFor='ProfilePic'>
                    <div className={styles.uploadPhoto} onClick={()=>{setEditMode(true)}}>
                      <FiUploadCloud className={styles.icons}/>
                      change the photo
                    </div>
                  </label>
                  <input 
                    type='file'
                    accept='image/*'
                    id='ProfilePic'
                    className='hidden'
                    onChange={(e)=>{setFile(e.target.files[0])}}/>
                  {/* delete profilePic */}
                  <button className={styles.uploadDelPhoto} onClick={removeProfilePic}>
                    <AiOutlineDelete className={styles.icons}/>
                    remove
                  </button>
                </div>
              </div>
              {/* foot */}
              <p className={styles.dull_text}>Add your photo. The recommended size is 256px x 256px</p>
            </div>
            {/* rhs */}
            <div className={styles.rhs}>
              <div className={styles.rhsImgCov}>
                <img src={msgImg} className={styles.rhsImg} alt='message from fins'/>
              </div>
            </div>
          </div>
          {/* 3/3 div */}
          <div className={styles.userDetailsCov}>
            {editMode ? (
              <div className={styles.inputDetailsCov}>
                <div className={styles.lft_userDetails}>
                  <label htmlFor='profession' className={styles.dull_text}>profession:</label>
                  <br/>
                  <input 
                    id='profession'
                    type= 'text'
                    className={styles.inputBox}
                    value = {profession}
                    onChange = {(e)=>{setProfession(e.target.value)}}/>
                  <br/>

                  <label htmlFor='institute' className={styles.dull_text}>institute:</label>
                  <br/>
                  <input 
                    id='institute'
                    type= 'text'
                    className={styles.inputBox}
                    value = {institute}
                    onChange = {(e)=>{setInstitute(e.target.value)}}/>
                  <br/>

                  <label htmlFor='aboutMe' className={styles.dull_text}>Bio:</label>
                  <br/>
                  <textarea 
                    id='aboutMe'
                    type= 'text'
                    className={styles.inputBox}
                    cols= '20'
                    rows= '3'
                    value = {aboutMe}
                    onChange = {(e)=>{setAboutMe(e.target.value)}}/>
                  <br/>

                  <label htmlFor='lives_in' className={styles.dull_text}>lives in:</label>
                  <br/>
                  <input 
                    id='lives_in'
                    type= 'text'
                    className={styles.inputBox}
                    value = {lives_in}
                    onChange = {(e)=>{setLives_in(e.target.value)}}/>
                </div>
                {/* right TO detailsBox */}
                <div>
                  <div className={styles.rgt_userDetails}>
                    <button onClick={(e)=> {applyChanges(e, 2)}} className={styles.BtnO}>
                      Apply changes
                    </button>
                    <button onClick={()=>{setIsModal(true)}} className={styles.BtnO}>
                      update Password
                    </button>
                  </div>
                  {
                    msg && (
                      <p className={styles.msg}>{msg}</p>
                    )
                  }
                </div>
              </div>
              ) : (
                  <div>
                    {/* username  location
                        profession (eng) at institute

                        bio: 

                        your registered email id
                        
                     */}
                     {/* 1/3 div */}
                    <div>
                      {/* a */}
                      <div className={styles.userNlocationCov}>
                        <h2 className={styles.username}>{context.user?.username}</h2>
                        {/* <p>{user.lives_in}</p> */}
                        <p className= {styles.locationBox}>
                          <IconContext.Provider value={{size:'20', color:'#e83900'}}>
                            <HiOutlineLocationMarker/>
                          </IconContext.Provider>
                          {context.user?.lives_in}</p>
                      </div>
                      {/* b */}
                      {/* {user.profession} at {user.institute} */}
                      <span className={styles.highlight}>{context.user?.profession}</span> at {context.user?.institute}
                    </div>
                    {/* 2/3 div */}
                    <div className={styles.bioCover}>
                      <p className={styles.bio}>
                        <span className='font-semibold text-col-txt tracking-wider'>Bio : </span>
                        {context.user?.aboutMe}</p>
                      <button onClick={()=>{setEditMode(true)}} className={styles.BtnO}>
                        Modify
                      </button>
                    </div>
                    {/* 3/3 div */}
                    <p className={styles.dull_text}>your registered email-id</p>
                    <p className={styles.email}>{context.user?.email}</p>
                  </div>
                )}
          </div>
        </div>
        {/* set modal */}
        {isModal && (
          <AuthenticateModal closeModal= {setIsModal} userId= {context.user._id}/>
        )}
      </div>
    </div>
  )
}

export default Settings