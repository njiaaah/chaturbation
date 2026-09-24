import { client } from './configdb.js'
import { timeNow } from './utils.js'

export async function dbDrop(){
    console.log(timeNow(), ' dropping db...')
    await client.query('DROP SCHEMA public CASCADE')
    await client.query('CREATE SCHEMA public')
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
            "name" TEXT NOT NULL UNIQUE,
            "created_at" TIMESTAMP NOT NULL DEFAULT now()
        )
    `)
    await client.query(`
        CREATE TABLE IF NOT EXISTS rooms (
            "id" BIGSERIAL PRIMARY KEY,
            "name" TEXT,
            "created_at" TIMESTAMP NOT NULL DEFAULT now()

        )
    `)
    await client.query(`
        CREATE TABLE IF NOT EXISTS messages (
            "id" BIGSERIAL PRIMARY KEY,
            "messages" TEXT,
            "authorId" BIGINT REFERENCES users(id),
            "roomId" BIGINT REFERENCES rooms(id),
            "created_at" TIMESTAMP NOT NULL DEFAULT now()
        )
    `)
    console.log(timeNow(), 'db init done successfully ❤️')
}


