import express from 'express'
import User from '../mongoDB/models/User.js'
import bcrypt from 'bcrypt'

const router = express.Router()

/* read user (although not needed but still making it and 
i might not use it as well in frontend) */
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById({_id: req.params.id})
        const {password, ...others} = user._doc
        res.status(200).json(others)
    } catch (err) {
        res.statusCode(500)
    }
})

/* update user */
router.patch('/:id', async (req, res) => {
    /* //@dev::: since i took userId from url so someone could place another url 
    and then update someone else's userId so i will first check */
    if (req.params.id === req.body.userId) {
        try {
            /* //@dev::: user could update their username, password and profilePic Only
            for this i will place joi later (since someone could inject 
            code for fields which don't exist and update them too) */

            // encrypt password
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(req.body.password, salt)
                req.body.password = hashedPassword
            }

            const user = await User.findByIdAndUpdate({_id: req.params.id}, req.body)
            const {password, ...others} = user._doc
            res.status(201).json(others)
            /* //@dev::: will send a boolean instead and frontend will detect true as value 
            sent in response, on which it will NavigateTo login page since i 
            want to generate and save a new jwt in browserStorage so that now when 
            user refreshes their page they see themselves as updatedUser n not old user */
        } catch (err) {
        res.statusCode(500)
        }
    } else {
        res.status(403).send("you can't update someone else's account")
    }
})

/* delete user */
/* user clicks on 'delete account button'
user told to type their password along with this input box in 
pop-up they are being shown delete my account button to 
which they click after writing password and boom */
router.delete('/:id', async(req, res) => {
    const paramId = req.params.id
    const userId = req.body.userId
    const password = req.body.password
    
    if (userId === paramId) {
        if (password) {
            let user
            // check users existence
            user = await User.findById({_id: userId})
            !user && res.statusCode(403)
            // check password
            const valid = await bcrypt.compare(password, user.password)
            !valid && res.status(401).send('invalid password!')
            // delete their account
            await User.deleteOne({_id: userId})
            return res.status(200).send('User deleted successfully')
        } else {
            return res.status(401).send("Password is required!😽")
        }
    } else {
        res.statusCode(403)
    }
})

/* create user through login route */

export default router