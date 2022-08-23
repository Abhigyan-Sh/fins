import axios from '../axios.js'
import React, { useState }from 'react'

const Modal = (props) => {
    const styles = {
        modalBG: 'absolute w-screen top-0 left-0 h-screen bg-modalBg flex justify-center items-center',
        modal: 'w-4/12 h-4/12 bg-white rounded-xl shadow-custom flex flex-col p-6',
        cancel: 'flex justify-end',
        cancelBtn: 'bg-transparent border-0 text-2xl pointer-cursor',
        title: 'inline-block text-center mt-3 text-3xl',
        catCover: 'ml-2 flex flex-wrap justify-center items-center my-10',
        category: 'px-2 bg-txt text-col-txt leading-5 text-sm font-semibold mr-2 rounded-full cursor-pointer w-fit py-2 px-4 mb-2',
        options: 'flex justify-center items-center',
        close: 'bg-gray-300 hover:bg-gray-400 text-rose-500 font-bold py-2 px-4 rounded-l',
        publish: 'bg-gray-300 hover:bg-gray-400 text-emerald-600 font-bold py-2 px-4 rounded-r',
        popupMsgCover: 'flex justify-center items-center',
        popupMsg: 'text-emerald-600 mb-4'
    }
    const [ maxCatSelect, setMaxCatSelect ] = useState(props.postProps.categories.length)
    const categories = ['Food', 'Travel', 'Health and Fitness', 'Fashion and beauty', 'Parenting', 'Music', 'Art and Design', 'Book and Writing', 'Sports', 'Movie', 'GeoPolitical']
    const addToCategories = (i) => {
        if (props.postProps.categories.includes(categories[i])) {
            props.postProps.categories.splice(props.postProps.categories.indexOf(categories[i]), 1)
        } else {
        props.postProps.categories.push(categories[i])
        }
        /* BELOW 2 LINES FOR TESTING */
        console.log(props.postProps.categories)
        // console.log(props.postProps)
        setMaxCatSelect(props.postProps.categories.length)
        // console.log(maxCatSelect)
    }
    const handlePublish = async () => {
        try {
        console.log(props.postProps)
            const res = await axios.post('/posts/', props.postProps)
            {res && window.location.replace('/')}
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div className={styles.modalBG}>
        <div className={styles.modal}>
            <div className={styles.cancel}>
                <button onClick={()=>{props.closeModal(false)}} className={styles.cancelBtn}>X</button>
            </div>
            <h1 className={styles.title}>Choose the category your post falls in: </h1>
            <div className={styles.catCover}>
                {categories.map((e,i) => (
                    <div key={i} className={styles.category} onClick={()=>{addToCategories(i)}}>{e}</div>
                ))}
            </div>
            {maxCatSelect === 3 && (
            <div className={styles.popupMsgCover}>
                <p className={styles.popupMsg}>max. number of categories have been selected 🙀</p>
            </div>)}
            <div className={styles.options}>
                <button onClick={()=>{props.closeModal(false)}} className={styles.close}>Cancel</button>
                <button className={styles.publish} onClick={handlePublish}>Publish</button>
            </div>
        </div>
    </div>
  )
}

export default Modal