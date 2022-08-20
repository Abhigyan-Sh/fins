import { BsBookmarkHeart } from 'react-icons/bs'
import { MdHideSource } from 'react-icons/md'
import { CgOptions } from 'react-icons/cg'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  const styles = {
    'post_outerCover': 'border-y-1 pt-10 ml-32 mr-32 flex justify-center',
    'post_innerCover': 'w-11/12',
    'post_header': 'flex items-center',
    'post_header_inner': 'flex items-center justify-between ml-1',
    'profilePic': 'w-8 h-8 rounded-full cursor-pointer',
    'dull_text': 'text-zinc-500 font-semibold text-sm cursor-pointer',
    'dull_dot': 'w-0.5 h-0.5 bg-zinc-500 rounded-full mx-1',
    'user_text': 'font-semibold text-gray-800 font-karla text-base cursor-pointer',
    'post_body': 'flex mt-2 cursor-pointer',
    'post_title': 'capitalize font-silkscreen font-bold text-2xl pb-1.5 cursor-pointer',
    'post_desc': 'text-base cursor-pointer',
    'body_footer': 'flex items-center py-4',
    'categories': 'flex mr-2',
    'category': 'px-2 py-1 bg-txt text-col-txt m-1 rounded-xl cursor-pointer font-medium',
    'userTools': 'flex items-center ml-12 gap-x-6',
    'firstHalf_body': 'basis-9/12',
    'secondHalf_body': 'basis-3/12',
    'postPicContainer': 'w-32 float-right',
    'pointer': 'cursor-pointer',
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
          <img src={PF + post.profilePic} alt='' className={styles.profilePic}/>
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
            <div className= {styles.firstHalf_body}>
              <Link to={`/post/${post._id}`}>
                <h2 className={styles.post_title}>{post.title}</h2>
                <p className={styles.post_desc}>{post.desc.slice(0,230) + '..'}</p>
              </Link>
              {/* body footer */}
              <div className={styles.body_footer}>
                <div className={styles.categories}>
                  {post.categories.map((e, i) => {
                    return (<div className={styles.category} key={i}>{e}</div>)
                  })}
                </div>
                <p className={styles.dull_text}>3 min. read</p>
                <div className={styles.dull_dot}></div>
                {/* <p className={styles.dull_text}>selected for you!</p> */}
                {/* bookmark, hide, options */}
                <div className={styles.userTools}>
                  <IconContext.Provider value= {{color: 'rgb(64, 64, 64)', size: '22px'}}>
                    <BsBookmarkHeart className={styles.pointer}/>
                    <MdHideSource className={styles.pointer}/>
                    <CgOptions className={styles.pointer}/>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
            {/* second half Body */}
            <Link to={`/post/${post._id}`}>
              <div className={styles.secondHalf_body}>
                <div className={styles.postPicContainer}>
                  <img src={PF2 + post.postPic} alt='' className={styles.postImage}/>
                </div>
              </div>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Post