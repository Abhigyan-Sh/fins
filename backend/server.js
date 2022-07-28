import express from 'express'
const app = express()
import connectToMongoDB from './connectToMongoDB/connectMongo.js'

connectToMongoDB()

app.get('/', (req, res) => {
    res.status(200).send("hi! it's working")
})

app.listen(8000, () => {
    console.log('server is listening..')
})