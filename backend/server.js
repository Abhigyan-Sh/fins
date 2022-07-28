import express from 'express'
import connectToMongoDB from './mongoDB/connectMongo.js'
import auth from './routes/auth.js'

const app = express()
const PORT = process.env.PORT
connectToMongoDB()
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("hi! it's working")
})

app.use('/api_v1/auth', auth)

app.listen(PORT, () => {
    console.log('server is listening..')
})