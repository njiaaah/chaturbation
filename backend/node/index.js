import { dbConnect, dbInit, dbDrop } from './init.js'
import AuthRoutes from './routes/auth.js'
import express from 'express'
import cors from 'cors'

await dbConnect()
await dbDrop()
await dbInit()


const app = express()
app.use(cors())
app.use(express.json())

app.use('/auth', AuthRoutes)

app.get('/status', (req, res) => {
    res.send('ok')
})

const port = 9999
app.listen(port);
console.log('listening on ', port)





