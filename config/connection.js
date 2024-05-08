'use strict'

const { Pool } = require('pg')

const pool = new Pool ({
    user : 'postgres',
    password : 'postgres',
    port : 5432,
    database : 'PGDEMO',
    host : 'localhost',
    idleTimeoutMillis : 500
})

module.exports = pool

//TEST DB CONNECTION

// async function testQueryConnection() {
//     let respond = await pool.query('SELECT NOW();')
//     console.log(respond);
// }

// testQueryConnection()