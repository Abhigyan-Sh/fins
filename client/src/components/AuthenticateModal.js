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
    inputBox: 'p-2 rounded-lg m-3 bg-zinc-100 w-8/12 outline-0',
  }
  const { user } = useContext(NoteContext)
  const [ msg, setMsg ] = useState('')
  const [ currentPass, setCurrentPass ] = useState('')
  const [ newPass, setNewPass ] = useState('')
  const updatedUser = {
    userId: props.userId,currentPass, newPass
  }
  // formData updating..
  const handleSubmit = async () => {
    axios.post(`/verify_user/${user._id}`, updatedUser)
    .then(res => {
      console.log(res.data)
      setMsg('password has been updated successfully!')
    }).catch(err => {
        setMsg(err.response.data)
    })
    /* below wouldn't work
    console.log(res)
    if (res.status === 200) {
      setMsg('new password has been setup successfully!')
    } else {
      setMsg(res.response.data)
    } */
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
        {msg === 'wrong password' && (
          <p className='text-rose-600 m-auto'>{msg} 😹</p>
        )}
        {msg === 'sorry unfortunately, some server error occurred' && (
          <p className='text-yellow-500 m-auto'>{msg} 😿</p>
        )}
        {msg === 'password has been updated successfully!' && (
          <p className='text-emerald-600 m-auto'>{msg} 🙀</p>
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