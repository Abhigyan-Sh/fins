import React, { useState , useContext } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import Header from '../components/Header.js'
import { NoteContext } from '../context/NoteContext.js'

const Write = () => {
  const styles = {
    writeCover: 'w-full h-screen',
    writeBoxCover: 'flex justify-center w-full h-full mt-6',
    writeBox: 'w-7/12 flex',
    uploadCover: 'p-4',
    icons: 'w-8 h-8 cursor-pointer',
    inputCover: 'flex flex-col p-4 w-full',
    inputTitle: 'capitalize font-bold text-3xl p-2 outline-0',
    inputDesc: 'p-2 text-base mt-4 outline-0',
  }
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [postPic, setPostPic] = useState('')
  const [categories, setCategories] = useState([])
  // TO BE TAKEN
  const { user } = useContext(NoteContext)
  // Till here 
  const postProps = {
    title, 
    desc, 
    postPic, 
    username: user?.username, 
    profilePic: user?.profilePic, 
    categories,
  }
  return (
    <div className={styles.writeCover}>
      <Header postProps={postProps}/>
      <div className={styles.writeBoxCover}>
        <div className={styles.writeBox}>
          <div className={styles.uploadCover}>
            <BsCloudUpload className={styles.icons}/>
          </div>
          <div className={styles.inputCover}>
            <input
              type='text'
              className={styles.inputTitle}
              placeholder='Title'
              required
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}/>
            <textarea
              type='text'
              className={styles.inputDesc}
              placeholder='Tell your story...'
              rows= '25'
              required
              value={desc}
              onChange={(e) => {setDesc(e.target.value)}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write