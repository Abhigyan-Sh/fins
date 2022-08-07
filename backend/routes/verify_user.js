import express, { response } from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.get('/', async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user)=> {
        if(err){
            res.status(403).send(err.message)
        } else {
            res.send(user)
        }
    })
})

export default router
/* 
token is sent like text not string and if token has been put in strings then it 
would tell 'invalid token' */
