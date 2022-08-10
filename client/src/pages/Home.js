import React from 'react'
import Navbar from '../components/Navbar.js'
import Sidebar from '../components/Sidebar.js'
import Posts from '../components/Posts.js'

const Home = () => {
  return (
    <div className='flex flex-row'>
        <Navbar className='basis-1/10'/>
        <Posts className='basis-5/10'/>
        <Sidebar className='basis-4/10'/>
    </div>
  )
}

export default Home