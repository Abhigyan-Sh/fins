import React from 'react'
import Post from './Post.js'

const Posts = ({posts}) => {
  return (
    <div>
      {/* slice(0), since it creates a shallow copy of the 
      original array which it can reverse. This way you need not to 
      save reversed array first to a variable before mapping 
      and thus saves space */}
      {posts.slice(0).reverse().map((p, i) => (
        <Post key={i} post= {p}/>
        )
      )}
    </div>
  )
}

export default Posts