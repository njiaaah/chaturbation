import { client } from './configdb.js'

export async function createUser(name, password) {
    console.log(name, password)
    console.log('starting to write user to db...')
    await client.query((`
        INSERT INTO users (name, password)
        VALUES ($1, $2)
        RETURNING *
        `),
        [name, password]
    )
    console.log('new user created 😁😊')
} 