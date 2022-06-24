import { createConnection } from 'mysql';

const connection = createConnection({
    host: 'localhost',
    user: 'user',
    password: 'eugewebdevs',
    database: 'db'
})

connection.connect((err) => {
    err ? console.error('error: ' + err.message) : console.log('Connected to the MySQL server.')
})