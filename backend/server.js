import express from 'express'
import connectToMongoDB from './mongoDB/connectMongo.js'
import auth from './routes/auth.js'
import verify from './routes/verify.js'
// 1/2
import verify_user from './routes/verify_user.js'
import post from './routes/posts.js'
import user from './routes/user.js'

const app = express()
const PORT = process.env.PORT
connectToMongoDB()
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("hi! it's working")
})

app.use('/api_v1/auth', auth)
app.use('/users', verify)
// 2/2
app.use('/verify_user', verify_user)
app.use('/posts', post)
app.use('/user', user)

app.listen(PORT, () => {
    console.log('server is listening..')
})