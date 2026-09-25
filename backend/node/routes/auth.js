import { Router } from 'express'
import { createHash } from 'node:crypto'
import { createUser } from '../db.js'

const router = Router()


router.post('/sign-up', async (req, res) => {
    const name = req?.body?.name
    const password = req?.body?.name
    if(name && password) {
        const hashedPassword = createHash('sha256')
        .update(password)
        .digest('hex')
        try {
           await createUser(name, hashedPassword)
           res.status(200).send(hashedPassword)
        } catch(err){
            res.status(500).send(err.detail)
        }
    } else 
        res.status(500).send('no password or username')
})

export default router