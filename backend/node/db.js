import { client } from './configdb'

export async function createUser(name, password) {
    client.query(`
        INSERT INTO users(name, password)
        VALUES ($1, $2)
        RETURNING *
        `),
        [name, password]
} 