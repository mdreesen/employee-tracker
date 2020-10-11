// NOTES
// this brings back
//  - ID
//  - Title
//  - Department Role belongs to
//  - Salary for that role

const connection = require('../db/database');
// get roles
getRole = () => {
    console.log('Getting the roles\n');
    const query = connection.query(
        'SELECT * FROM role',
        function(err, res) {
            if (err) throw err;
            // log the results
            console.table(res);
            connection.end();
        }
    )
};

addRole = () => {
    console.log('Added A New Role');
    const query = connection.query(
        'INSERT INTO role SET ?', {
            title: "Test Employee",
            salary: "60000",
            department: "Testing Department"
        },
        function(err, res) {
            if (err) throw err;
            console.table(res)
        }
    )
};

module.exports = role;

getRole();
addRole();