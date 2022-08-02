import express from 'express'
import User from '../mongoDB/models/User.js'
import Token from '../mongoDB/models/Token.js'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import sendEmail from '../sendEmail.js'

const router = express.Router()

router.post('/register', async (req, res) => {
    // encryption of password
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    
    const {password, ...others} = req.body
    others.password = hashedPass
    // creating data on DB, sending back the response
    const formData = await User.create(others)

    const token = await Token.create({
        userId: formData._id,
        token: crypto.randomBytes(32).toString('hex'),
    })
    // to send email now here
    const url = `http://localhost:3000/users/${token?.userId}/verify/${token?.token}`

    sendEmail(formData.email, `Verify Mail 😄 ${formData.username}`,url)
    res.status(200).send('email sent successfully ! 😄')
    // if (formData) return res.status(201).json(formData)
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).send('wrong credentials1')

        const validate = await bcrypt.compare(req.body.password, user.password) // order matters
        !validate && res.status(400).send('wrong credentials2')

        const {password, ...others} = user._doc
        res.status(200).json(others)
    } catch(err) {
        res.status(500).send(err)
    }
})

export default router

/* early version(i did already had knowledge to develop above one but just wanted to play around)
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if (user) {
            if (req.body.password === user.data.password) {
                const {password, ...others} = user.data
                res.status(200).json(others)
            }
            res.status(400).send('wrong credentials')
        }
        res.status(400).send('wrong credentials')
    } catch(err) {
        res.status(500).send(err)
    }
})
 */
