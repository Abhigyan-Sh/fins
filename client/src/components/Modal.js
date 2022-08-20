import axios from '../axios.js'
import React from 'react'

const Modal = (props) => {
    const styles = {
        modalBG: '',
        modal: '',
        cancel: '',
        title: '',
        catCover: '',
        options: '',
        category: '',
        close: '',
        publish: '',
    }
    const categories = ['Food', 'Travel', 'Health and Fitness', 'Fashion and beauty', 'Parenting', 'Music', 'Art and Design', 'Book and Writing', 'Sports', 'Movie', 'GeoPolitical']
    const addToCategories = (i) => {
        props.postProps.categories.push(categories[i])
        /* BELOW 2 LINES FOR TESTING */
        // console.log(props.postProps.categories)
        // console.log(props.postProps)
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
                <button onClick={()=>{props.closeModal(false)}}>X</button>
            </div>
            <h1 className={styles.title}>Choose the category your post falls in: </h1>
            <div className={styles.catCover}>
                {categories.map((e,i) => (
                    <div key={i} className={styles.category} onClick={()=>{addToCategories(i)}}>{e}</div>
                ))}
            </div>
            <div className={styles.options}>
                <button onClick={()=>{props.closeModal(false)}} className={styles.cancel}>Cancel</button>
                <button className={styles.publish} onClick={handlePublish}>Publish</button>
            </div>
        </div>
    </div>
  )
}

export default Modal