import dotenv from 'dotenv'
import { Client } from 'pg'

export const config = dotenv.config({
    pghost: process.env.PGHOST,
    pgport: process.env.PGPORT,
    pgdatabase: process.env.PGDATABASE,
    pguser: process.env.PGUSER,
    pgpassword: process.env.PGPASSWORD
});

export const client = new Client({
    user: config.pghost,
    password: config.pgpassword,
    host: config.pghost,
    port: config.port,
    database: config.pgdatabase
})
