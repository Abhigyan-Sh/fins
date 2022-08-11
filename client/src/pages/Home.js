import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.js'
import Sidebar from '../components/Sidebar.js'
import Posts from '../components/Posts.js'
import axios from '../axios.js'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/posts')
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPosts()
  }, [])
  return (
    <div className='grid grid-cols-sky'>
        <Navbar className=''/>
        <Posts className='' posts= {posts}/>
        <Sidebar className=''/>
    </div>
  )
}

export default Home