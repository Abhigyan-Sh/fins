import React from 'react'
import Post from './Post.js'

const Posts = ({posts}) => {
  return (
    <div>
      {posts.map((p, i) => (
        <Post key={i} post= {p}/>
        )
      )}
    </div>
  )
}

export default Posts