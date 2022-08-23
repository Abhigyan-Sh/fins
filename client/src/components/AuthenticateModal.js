import React, { useState, useContext } from 'react'
import axios from '../axios.js'
import { NoteContext } from '../context/NoteContext.js'

const AuthenticateModal = (props) => {
  const styles = {
    modalBG: 'absolute w-screen top-0 left-0 h-screen bg-modalBg flex justify-center items-center',
    modal: 'w-4/12 h-4/12 bg-white rounded-xl shadow-custom flex flex-col p-6',
    inputCover: 'flex flex-col justify-center items-center',
    cancelBtnCov: 'flex justify-end',
    cancelBtn: 'bg-transparent border-0 text-2xl pointer-cursor',
    title: 'inline-block text-center mt-3 text-3xl',
    options: 'flex justify-center items-center mt-5',
    close: 'bg-gray-300 hover:bg-gray-400 text-rose-500 font-bold py-2 px-4 rounded-l',
    apply: 'bg-gray-300 hover:bg-gray-400 text-emerald-600 font-bold py-2 px-4 rounded-r',
    // 
    catCover: 'ml-2 flex flex-wrap justify-center items-center my-10',
    category: 'px-2 bg-txt text-col-txt leading-5 text-sm font-semibold mr-2 rounded-full cursor-pointer w-fit py-2 px-4 mb-2',
    popupMsgCover: 'flex justify-center items-center',
    popupMsg: 'text-emerald-600 mb-4',
    inputBox: 'p-2 rounded-lg m-3 bg-zinc-100 w-8/12 outline-0',
    grTxt: 'text-emerald-600 m-auto'
  }
  const { user } = useContext(NoteContext)
  const [ msg, setMsg ] = useState(false)
  const [ currentPass, setCurrentPass ] = useState('')
  const [ newPass, setNewPass ] = useState('')
  const updatedUser = {
    userId: props.userId,currentPass, newPass
  }
  // formData updating..
  const handleSubmit = async () => {
    // create route to check user password
    const res = await axios.post(`/verify_user/${user._id}`, updatedUser)
    console.log(res)
    res && setMsg(true)
  }
  return (
    <div className={styles.modalBG}>
      <div className={styles.modal}>
        {/* X */}
        <div className={styles.cancelBtnCov}>
          <button onClick={()=>{props.closeModal(false)}} className={styles.cancelBtn}>X</button>
        </div>
        {/* Pass */}
        <div className={styles.inputCover}>
          <h1 className={styles.title}>Current Password:</h1>
          <input 
            type= 'text'
            className={styles.inputBox}
            required
            value = {currentPass}
            onChange = {(e)=>{setCurrentPass(e.target.value)}}/>
        </div>
        <div className={styles.inputCover}>
          <h1 className={styles.title}>New Password:</h1>
          <input 
            type= 'text'
            className={styles.inputBox}
            required
            value = {newPass}
            onChange = {(e)=>{setNewPass(e.target.value)}}/>
        </div>
        {/* msg appears */}
        {msg && (
          <p className={styles.grTxt}>new password has been setup successfully!</p>
        )}
        {/* CANCEL n APPLY */}
        <div className={styles.options}>
          <button onClick={()=>{props.closeModal(false)}} className={styles.close}>Cancel</button>
          <button onClick={handleSubmit} className={styles.apply}>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default AuthenticateModal