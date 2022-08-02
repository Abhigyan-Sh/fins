import express from 'express'

const router = express.Router()

router.post(`${process.env.BASE_URL}/users/:userId/verify/:token`, async(req, res) => {
    
})