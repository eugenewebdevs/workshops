import { createConnection } from 'mysql';

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'helloworld',
    database: 'testapp'
})

connection.connect((err) => {
    err ? console.error('error: ' + err.message) : console.log('Connected to the MySQL server.')
})