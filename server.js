// TODO
//

const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'CammiAnn90',
    database: 'business'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
});

afterConnection = () => {
    connection.query('SELECT * FROM employee', function(err, res) {
        if (err) throw error;
        // Log the results in the console
        console.log(res);
        connection.end();
    });
};