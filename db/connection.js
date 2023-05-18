const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'evilcorp'
}).promise();

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the evilcorp database.');
});

module.exports = db;
