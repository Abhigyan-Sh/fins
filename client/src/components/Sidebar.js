import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
import { FaMeteor } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Sidebar = () => {
  return (
    <div>
      <div>
        <p>about us</p>
        <p>hi! folks,<br/>
          this slate is for you to share your feelings, thoughts about whatever you come across.
        </p>
      </div>
      <div>
        <p>genres to read from..</p>
        <div>
          {/* make an array */}
          <p>Food</p>
          <p>Travel</p>
          <p>Health and Fitness</p>
          <p>LifeStyle</p>
          <p>Fashion and beauty</p>
          <p>Parenting</p>
          <p>Music</p>
          <p>Art and Design</p>
          <p>Book and Writing</p>
          <p>Sports</p>
          <p>Movie</p>
          <p>GeoPolitical</p>
        </div>
      </div>
      <div>
        <p>FOLLOW ME ON</p>
        <div>
          <IconContext.Provider value={{color: 'grey', size: '25px'}}>
            <BsLinkedin/>
            <BsGithub/>
            <BsTwitter/>
            <FaMeteor/>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Sidebar