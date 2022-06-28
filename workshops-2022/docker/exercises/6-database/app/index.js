import {createConnection} from 'mysql';

const connection = createConnection({
    host: process.env.MYDSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
})

connection.connect((err) => {
    err ? console.error('error: ' + err.message) : console.log('Connected to the MySQL server.')
})

connection.end();