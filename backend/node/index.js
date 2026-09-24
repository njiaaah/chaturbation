import { dbConnect, dbInit } from './init.js'
import express from 'express'

await dbConnect()
await dbInit()

const app = express()

app.get('/sign-up', (req, res) => {
    res.send(req)
})

app.listen(9999);






