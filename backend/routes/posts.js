import express from 'express'
import Post from '../mongoDB/models/Post.js'

const router = express.Router()

// create post
router.post('/', async (req, res) => {
    const post = await Post.create(req.body)
    res.status(201).json(post)
})

// update post
router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const updatedPost = await Post.findByIdAndUpdate({_id: id}, req.body)
    res.status(200).json(updatedPost)
})

// delete post 
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const post = await Post.deleteOne({_id: id})
    res.status(200).json(post)
})

// get single post(when clicked on single post or when published a new post)
router.get('/:id', async (req, res) => {
    const post = await Post.findById({_id: req.params.id})
    res.status(200).json(post)
})
// get all posts or with query params..
router.get('/', async (req, res) => {
    const username = req.query.user
    const category = req.query.cat
    try {
        let posts
        if (username) {
            posts = await Post.find({username})
        } else if (category) {
            posts = await Post.find({
                categories: {
                    $in: [category]
                }
            })
        } else {
            posts = await Post.find()
        }
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})

export default router





/* category based search
later author based search , both are 'query' based searches
get all posts (in recents order) all 3 in one */

/* delete and update single post (id of document needed(navigateTo them to home page) n
front-end part authenticate (postSchema already having n user)) */
// create post 
// get single post (_id from url)

/* post should have these in its schema
- _id
// - userId from create post time(write in frontend)
// (username and profilePic comes from userId)
username and profilePic
- photo
- title
- category
- description
*/
