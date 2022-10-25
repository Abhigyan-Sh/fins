import React, { useState, useMemo, useRef, useContext } from 'react'
import JoditEditor from 'jodit-react'
import { BsCloudUpload } from 'react-icons/bs'
import Header from '../components/Header.js'
import { NoteContext } from '../context/NoteContext.js'

const Write = () => {
  const styles = {
    writeCover: 'w-full h-screen',
    writeBoxCover: 'flex justify-center w-full h-full mt-6',
    writeBox: 'w-7/12 flex',
    uploadCover: 'p-4',
    disableInput: 'hidden',
    icons: 'w-8 h-8 cursor-pointer',
    inputCover: 'flex flex-col p-4 w-full',
    postPicCover: 'flex justify-center items-center mb-8',
    file: 'w-10/12 rounded-sm',
    inputTitle: 'capitalize font-bold text-3xl p-2 outline-0 mb-4',
    inputDesc: 'p-2 text-base mt-4 outline-0',
  }
  const editor = useRef(null)
  const config = useMemo(() => (
		{
      readonly: false,
      placeholder: 'Start writing your blog..',
      colorPickerDefaultTab: 'Text',
      spellcheck: true,
      minHeight: 600,
    })
    , []
	)

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [postPic, setPostPic] = useState('')
  const [categories, setCategories] = useState([])
  // 
  const [file, setFile] = useState('')
  const { user } = useContext(NoteContext)
  const postProps = {
    username: user?.username, 
    userId: user?._id,
    postPic,
    title,
    categories,
    desc,
    profilePic: user?.profilePic,
    institute: user?.institute,
  }
  return (
    <div className={styles.writeCover}>
      <Header postProps={postProps} file={file}/>
      <div className={styles.writeBoxCover}>
        <div className={styles.writeBox}>
          {/* lft */}
          <div className={styles.uploadCover}>
            <label htmlFor='uploadPostPic'>
              <BsCloudUpload className={styles.icons}/>
            </label>
            <input 
              type='file' 
              accept='image/*'
              id='uploadPostPic'
              className={styles.disableInput}
              onChange={(e) => {setFile(e.target.files[0])}}/>
          </div>
          {/* rgt */}
          <div className={styles.inputCover}>
            {file && (
            <div className={styles.postPicCover}>
              <img src={URL.createObjectURL(file)} className={styles.file}/>
            </div>)}
            <input
              type='text'
              className={styles.inputTitle}
              placeholder='Title'
              required
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}/>

            <JoditEditor
			        ref={editor}
			        value={desc}
			        config={config}
			        onChange={newContent => setDesc(newContent)}
              className={styles.inputDesc}
            />
            {/* @dev::: ⚠Obsolete Code Below
            <textarea
              type='text'
              className={styles.inputDesc}
              placeholder='Tell your story...'
              rows= '25'
              required
              value={desc}
              onChange={(e) => {setDesc(e.target.value)}}/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write