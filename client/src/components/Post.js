

const Post = ({post}) => {
  const styles = {
    'post_outerCover': 'border-y-1 pt-10 flex justify-center',
    'post_innerCover': 'w-11/12',
    'post_header': 'flex items-center',
    'post_header_inner': 'flex items-center justify-between ml-1',
    'profilePic': 'w-8 h-8 rounded-full',
    'dull_text': 'text-zinc-500 font-semibold text-sm',
    'dull_dot': 'w-0.5 h-0.5 bg-zinc-500 rounded-full mx-1',
    'user_text': 'font-semibold text-gray-800 font-karla text-base',
    'post_body': 'flex',
    'post_title': 'capitalize font-silkscreen font-bold text-2xl',
    'post_desc': 'text-base',
    'body_footer': 'flex items-center bg-zinc-300',
    'categories': 'flex mr-2',
    'category': 'px-2 bg-zinc-700 m-1 rounded-xl text-amber-500',
    'postImage': '',
  }
  const PF = 'http://localhost:8000/image/'
  const PF2 = 'http://localhost:8000/postImage/'
  if (!post.profilePic) {
    post.profilePic = 'user_profile.png'
  }
  return (
    <div className={styles.post_outerCover}>
      <div className={styles.post_innerCover}>
        {/* post headers */}
        <div className={styles.post_header}>
          <img src={PF + post.profilePic} alt='profile icon' className={styles.profilePic}/>
          <div className={styles.post_header_inner}>
            <p className={styles.user_text}>{post.username} <span className={styles.dull_text}>in </span>
            oxford school of Business</p>
            <div className={styles.dull_dot}></div>
            <span className={styles.dull_text}>{new Date(post.createdAt).toDateString()}</span>
          </div>
        </div>
        {/* post Body */}
        <div className= {styles.post_body}>
          {/* first-half Body */}
          <div>
            <h2 className={styles.post_title}>{post.title}</h2>
            <p className={styles.post_desc}>{post.desc.split(0,60) + '..'}</p>
            {/* body footer */}
            <div className={styles.body_footer}>
              <div className={styles.categories}>
                {post.categories.map((e) => {
                  return (<div className={styles.category}>{e}</div>)
                })}
              </div>
              <p className={styles.dull_text}>3 min. read</p>
              <div className={styles.dull_dot}></div>
              <p className={styles.dull_text}>selected for you!</p>
            </div>
          </div>
          {/* second half Body */}
          <div>
            <img src={PF2 + post.postPic} alt='blog' className={styles.postImage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post