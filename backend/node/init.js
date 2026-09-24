import { client } from './configdb.js'
import { timeNow } from './utils.js'

export async function dbDrop(){
    console.log(timeNow(), ' dropping db...')
    await client.query('DROP TABLE *')
    console.log(timeNow(), 'db dropped 💀')
}

export async function dbConnect(){
    console.log(timeNow(), 'connecting to db...')
    await client.connect()
    console.log(timeNow(), 'connected to db ⭐')
}

export async function dbDisconnect(){
    await client.end()
}

export async function dbInit() {
    console.log(timeNow(), 'db init...')
    await client.query(`
        CREATE TABLE IF NOT EXISTS users (
            "id" BIGSERIAL PRIMARY KEY,
            "password" TEXT,
            "name" TEXT
        )
    `)
    await client.query(`
        CREATE TABLE IF NOT EXISTS rooms (
            "id" BIGSERIAL PRIMARY KEY,
            "name" TEXT
        )
    `)
    await client.query(`
        CREATE TABLE IF NOT EXISTS messages (
            "id" BIGSERIAL PRIMARY KEY,
            "messages" TEXT,
            "authorId" BIGINT REFERENCES users(id),
            "roomId" BIGINT REFERENCES rooms(id)
        )
    `)
    console.log(timeNow(), 'db init done successfully ❤️')
}


