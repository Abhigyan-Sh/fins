import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../mongoDB/models/User.js'

const router = express.Router()

/* give user back from user_token */
router.post('/', async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    // console.log(token)
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user)=> {
        if(err){
            // res.status(403).send(err.message)
            res.status(403).send('')
        } else {
            res.send(user)
        }
    })
})

/* update password */
router.post('/:id', async (req, res) => {
    if (req.params.id === req.body.userId) {
        try {
            const currentPass = req.body.currentPass
            const newPass = req.body.newPass
            const user = await User.findOne({_id: req.body.userId})
            const validate = await bcrypt.compare(currentPass, user.password)
            !validate && res.status(403).send('wrong password')
            const salt = await bcrypt.genSalt(10)
            const hashedPass = await bcrypt.hash(newPass, salt)
            const updatedUser = await User.findByIdAndUpdate({_id: req.params.id}, {password: hashedPass})
            const {password, ...userToSend} = updatedUser._doc
            res.status(200).send(userToSend)
        } catch (err) {
            res.status(500).send('sorry unfortunately, some server error occurred')
        }
    } else {
        res.sendStatus(403)
    }
})
export default router
/* 
token is sent like text not string and if token has been put in strings then it 
would tell 'invalid token' */
