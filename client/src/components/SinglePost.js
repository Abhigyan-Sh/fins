import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from '../axios.js'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import {BsLinkedin, BsTwitter,BsInstagram, BsLink45Deg, BsBookmarkHeart} from 'react-icons/bs'
import { CgOptions } from 'react-icons/cg'
import { IconContext } from 'react-icons/lib'

const SinglePost = () => {
    const styles = {
        postCover: 'bg-orange-10 h-screen pt-10 ml-32 mr-32 flex justify-center',
        postInrCover: 'w-11/12 bg-orange-20',
        postHeader: 'bg-orange-30 flex justify-between items-center',
        header_lftSide: 'flex',
        userIconCover: 'mr-4',
        userPostInfo: 'flex flex-col justify-between',
        userIcon: 'w-12 rounded-full',
        createNUpdate: 'flex items-center',
        dull_txt: 'text-zinc-500 font-semibold text-sm cursor-pointer',
        dull_dot: 'w-0.5 h-0.5 bg-zinc-500 rounded-full mx-2',
        userName: 'font-semibold',
        redTxt: 'text-medium-red text-xs',
        iconsCover: 'flex items-center justify-between',
        icons: 'w-5 h-5 ml-3 text-gray-400 cursor-pointer',
        shareIcons: 'flex items-center',
        otherIcons: 'flex items-center ml-5',
        heading: 'flex items-center justify-between',
        iconUpdateDeleteCont: 'flex',
        iconUpdateDelete: 'w-5 h-5 ml-3 cursor-pointer',
        lrgTxt: 'text-3xl tracking-tighter leading-10 my-5 text-col-txt font-silkscreen',
        postImg: 'mb-5',
        normTxt: 'mb-16 ml-2 text-xl font-normal text-col-txt font-quicksand leading-7',
        inputTitle: 'text-3xl tracking-tighter leading-10 my-5 text-col-txt font-silkscreen border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-zinc-300',
        inputDesc: 'mb-12 ml-2 text-xl font-normal text-col-txt font-quicksand leading-7 outline-8 border border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 outline-green-500 shadow-sm bg-zinc-200',
        publishBtn: 'text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-16',
    }
    // LATER TO CHANGE
    const user = {
        username: 'pryansh'
    }
    // TILL HERE
    const [post, setPost] = useState({})
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [updateMode, setUpdateMode] = useState(false)
    
    const PF = 'http://localhost:8000/image/'
    const PF2 = 'http://localhost:8000/postImage/'

    const {pathname} = useLocation()
    const postId = pathname.split('/')[2]
    
    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`)
            /* CAN'T ACCESS res BEFORE INITIALIZATION
            (!res.acknowledged) && console.log('error deleting post')
            (res.deletedCount!=1) && console.log('error deleting post') */           
            window.location.replace('/')
        } catch (err) {
            console.log(err.message)
        }
    }
    const handleSubmit = async () => {
        try {
            setUpdateMode(false)
            const res = await axios.patch(`/posts/${post._id}`, {
                title,
                desc,
            })
            (!res && console.log('error updating post')) // should see a pop-up green-tick OR red-cross
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
      const fetchPost = async () => {
        try {
            const res = await axios.get(`posts/${postId}`)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        } catch (err) {
          console.log(err)
        }
      }
      fetchPost()
    }, [postId])
    if (!post.profilePic) {
        post.profilePic = 'user_profile.png'
    }
  return (
    <div>
        <div className={styles.postCover}>
            <div className={styles.postInrCover}>
                {/* post header */}
                <div className={styles.postHeader}>
                    {/* lhs */}
                    <div className={styles.header_lftSide}>
                        <div className={styles.userIconCover}>
                            <a href={`http://localhost:3000/?user=${post.username}`}>
                                <img src={PF + post.profilePic} className={styles.userIcon} alt='user icon'/>
                            </a>    
                        </div>
                        <div className={styles.userPostInfo}>
                            <div className={styles.userName}>
                                <a href={`http://localhost:3000/?user=${post.username}`}>
                                    {post.username}
                                </a>
                            </div>
                            <div className={styles.createNUpdate}>
                                <p className={styles.dull_txt}><span className={styles.redTxt}>created on:</span> {new Date(post.createdAt).toDateString()}</p>
                                <div className={styles.dull_dot}></div>
                                {post.createdAt != post.updatedAt && 
                                   <p className={styles.dull_txt}><span className={styles.redTxt}>last updated:</span> {new Date(post.updatedAt).toDateString()}</p>}
                            </div>
                        </div>
                    </div>
                    {/* rhs */}
                    <div>
                        {/* place icons */}
                        <div className={styles.iconsCover}>
                            <div className= {styles.shareIcons}>
                                <BsLinkedin className={styles.icons}/>
                                <BsTwitter className={styles.icons}/>
                                <BsInstagram className={styles.icons}/>
                                <BsLink45Deg className={styles.icons}/>
                            </div>
                            <div className= {styles.otherIcons}>
                                <BsBookmarkHeart className={styles.icons}/>
                                <CgOptions className={styles.icons}/>
                            </div>
                        </div>
                    </div>
               </div>
               {/* post body */}
               <div>
                <div className={styles.heading}>
                    {/* input or title */}
                    {updateMode ? (
                        <input 
                        type='text'
                        placeholder='title'
                        className={styles.inputTitle}
                        autoFocus
                        required
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}/>
                    ) : (
                        <h1 className={styles.lrgTxt}>{title}</h1>
                    )}
                    {user?.username === post.username && (
                        <div className={styles.iconUpdateDeleteCont}>
                            <IconContext.Provider value={{color: '#4267B2'}}>
                               <FiEdit className={styles.iconUpdateDelete} onClick={()=> {setUpdateMode(true)}}/>
                            </IconContext.Provider>
                            <IconContext.Provider value={{color: '#e83900'}}>
                               <AiOutlineDelete className={styles.iconUpdateDelete} onClick={handleDelete}/>
                            </IconContext.Provider>
                        </div>
                    )}
                </div>
                <p className={styles.normTxt}>Awww man… another article trying to upend MVP. Let's see how this one turns out.</p>
                <img src={PF2 + post.postPic} alt='post image' className={styles.postImg}/>
                {updateMode ? (
                    <textarea
                    placeholder='blog'
                    className={styles.inputDesc}
                    rows= '25'
                    required
                    value={desc}
                    onChange={(e)=>{setDesc(e.target.value)}}/>
                ) : (
                    <p className={styles.normTxt}>{desc}</p>
                )}
                {/* publish button */}
                {updateMode && (
                    <button
                    className={styles.publishBtn}
                    onClick={handleSubmit}>publish</button>
                )}
               </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePost