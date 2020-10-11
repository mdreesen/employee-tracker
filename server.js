const inquirer = require('inquirer');
const connection = require('./db/database');
const employee = require('./lib/employee');
const department = require('./lib/department');
const role = require('./lib/role');
/*
const startQuestion = () => {
    return inquirer.prompt({
            type: 'list',
            name: 'start',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Role', 'Add An Employee', 'Update Employee Role']
        })
        .then(function(answer) {
            if (answer === 'View All Departments') {
                getDepartment();
            }
        })
};
*/


//startQuestion()
// getEmployee();
// updateEmployee();
// deleteEmployee();