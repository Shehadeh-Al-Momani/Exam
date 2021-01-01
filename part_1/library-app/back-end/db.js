const mysql = require('mysql12');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'books_exam'
});

db.connection((err) => {
    if (err) {
        console.error(' Error: ', e)
        return;
    }
})

module.exports = db; 