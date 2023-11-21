import React from 'react'
import Navbar from '../components/Navbar.js'
import SinglePost from '../components/SinglePost.js'
import Sidebar from '../components/Sidebar.js'

const Single = () => {
  return (
    <div className='grid grid-cols-sky'>
        <Navbar/>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single