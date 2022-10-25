import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
import { FaMeteor } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const styles = {
    sidebar: 'p-8 overflow-hidden border-l-1 sticky top-0 h-screen',
    upMargin: 'mt-32',
    container: 'tracking-wide mb-12',
    header: 'text-xl text-zinc-700 font-semibold mb-3',
    msg: 'ml-2 text-zinc-500',
    catContainer: 'ml-2 flex flex-wrap',
    category: 'px-2 bg-txt text-col-txt leading-5 text-sm font-semibold mr-2 rounded-full cursor-pointer w-fit py-2 px-4 mb-2',
    iconContainer: 'ml-2 flex justify-around items-center w-6/12'
  }
  const categories = ['Food', 'Travel', 'Health and Fitness', 'Fashion and beauty', 'Parenting', 'Music', 'Art and Design', 'Book and Writing', 'Sports', 'Movie', 'GeoPolitical']
  return (
    <div className= {styles.sidebar}>
      {/* for deletion later */}
      <div className={styles.upMargin}></div>
      {/* about_us */}
      <div className= {styles.container}>
        <p className={styles.header}>About Us</p>
        <p className={styles.msg}>hi! folks 🖐️,<br/>
          this slate is for you to share your feelings, thoughts about whatever you come across.
        </p>
      </div>
      {/* genres to choose */}
      <div className= {styles.container}>
        <p className={styles.header}>genres to read from..</p>
        <div className= {styles.catContainer}>
          {categories.map((e, i) => (
              <Link to={`/?cat=${e}`} key={i}>
                <div className={styles.category}>{e}</div>
              </Link>
          ))}
        </div>
      </div>
      {/* Follow me on... */}
      <div className= {styles.container}>
        <p className= {styles.header}>follow me on..</p>
        <div className= {styles.iconContainer}>
          <a href='https://www.linkedin.com/in/abhigyan-shukla-057345252/' target='_blank'>
            <IconContext.Provider value={{color: '#0A66C2', size: '25px'}}>
              <BsLinkedin/>
            </IconContext.Provider>
          </a>
          <a href='https://github.com/Abhigyan-Sh' target='_blank'>
            <IconContext.Provider value={{color: 'black', size: '25px'}}>
              <BsGithub/>
            </IconContext.Provider>
          </a>
          <a href='https://twitter.com/pryansh_sh' target='_blank'>
            <IconContext.Provider value={{color: '#00acee', size: '25px'}}>
              <BsTwitter/>
            </IconContext.Provider>
          </a>
          <a href='' target='_blank'>
            <IconContext.Provider value={{color: 'black', size: '25px'}}>
              <FaMeteor/>
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar