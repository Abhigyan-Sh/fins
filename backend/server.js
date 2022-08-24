import express from 'express'
import connectToMongoDB from './mongoDB/connectMongo.js'
import auth from './routes/auth.js'
import verify from './routes/verify.js'
import cors from 'cors'
import multer from 'multer'
// 1/2
import verify_user from './routes/verify_user.js'
import post from './routes/posts.js'
import user from './routes/user.js'

const app = express()
const PORT = process.env.PORT
connectToMongoDB()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.use('/image',express.static('assets/profilePic'))
app.use('/postImage',express.static('assets/postPic'))

app.get('/', (req, res) => {
    res.status(200).send("hi! it's working")
})

/* below for uploading ProfilePic to server */
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/profilePic')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})
const upload = multer({storage: fileStorageEngine})
app.post('/api_v1/upload/profilePic', upload.single('file'), (req, res) => {
    res.status(200).send('file has been uploaded successfully!')
})

/* below for uploading postPic to server */
const fileStorageEngine2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/postPic')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})
const upload2 = multer({storage: fileStorageEngine2})
app.post('/api_v1/upload/postPic', upload2.single('file'), (req, res) => {
    res.status(200).send('file has been uploaded successfully!')
})

app.use('/api_v1/auth', auth)
app.use('/users', verify)
// 2/2
app.use('/verify_user', verify_user)
app.use('/posts', post)
app.use('/user', user)

/* was using this to display image on postman
app.get('/userPic/:imgs', async (req, res) => {
    res.download('./assets/images/' + req.params.imgs)
}) */

app.listen(PORT, () => {
    console.log('server is listening..')
})