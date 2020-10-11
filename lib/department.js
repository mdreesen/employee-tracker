const connection = require('../db/database');

// Getting all departments
getDepartment = () => {
    console.log('Getting the departments\n');
    const query = connection.query(
        'SELECT * FROM department',
        function(err, res) {
            if (err) throw err;
            // log the results
            console.table(res);
            connection.end();
        }
    )
};

addDepartment = () => {
    console.log('Added New Department\n');
    const query = connection.query(
        'INSERT INTO department SET ?', {
            name: "Testing department name"
        },
        function(err, res) {
            if (err) throw err;
            console.table(res.affectedRows + ' Department Added\n')
        }
    )
};

module.exports = department;

getDepartment();
addDepartment();