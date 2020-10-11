const connection = require('../db/database');

// const app = express();
class Employee {
    constructor(connection) {
        this.connection = connection
    }

    AddEmployee = () => {
        console.log('Added New Employee\n');
        const query = connection.query(
            'INSERT INTO employee SET ?', {
                first_name: "Testing Name",
                last_name: "Testing Last Name",
                job_title: "Testing Job Title",

            }
        )
    }

    deleteEmployee = () => {
        console.log('Deleting employee\n');
        const query = this.connection.query(
            'DELETE FROM EMPLOYEE WHERE first_name = ?', [
                "TESTING"
            ],
            function(err, res) {
                if (err) throw err;
                console.table(res.affectedRows + ' employee deleted\n')
            }
        )
    }

    updateEmployee = () => {
        console.log('Updating employees\n');
        const query = this.connection.query(
            'UPDATE employee SET first_name = ? WHERE last_name = ?', [
                "TESTING", "Wilkinson"
            ],
            function(err, res) {
                if (err) throw err;
                console.table(res.affectedRows + ' Employee Updated\n');

            }
        )
        console.log(query.sql);
    };

    getEmployee = () => {
        console.log('Getting all employee data\n');
        this.connection.query(
            'SELECT * FROM employee',
            function(err, res) {
                if (err) throw err;
                // log the results
                console.table(res);
                connection.end();
            }
        );
    };
};

module.exports = Employee;