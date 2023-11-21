import express from 'express'
import User from '../mongoDB/models/User.js'
import Token from '../mongoDB/models/Token.js'

const router = express.Router()
/* nodemailer checks */
router.get(`/:userId/verify/:token`, async (req, res) => {
    const userId = req.params.userId
    const token = req.params.token
    
    // check existence of userId
    const sessionToken = await Token.findOne({userId: userId})
    !sessionToken && res.status(404).send('localhost:3000/api_v1/auth/login')
    
    // check whether same token
    const verified = sessionToken.token === token
    !verified && res.status(401).send('wrong token!🙀')

    // deleting session token
    await Token.deleteOne({userId: sessionToken.userId})

    // verified: true, in User collection document
    const user = await User.findByIdAndUpdate(userId, {verified: true})
    !user && res.status(500).send('server internal error')
    
    res.status(200).send(user)
})

export default router