const inquirer = require('inquirer');
const connection = require('./db/database');
const employee = require('./lib/employee');
const department = require('./lib/department');
const role = require('./lib/role');

const startQuestion = () => {
    return inquirer.prompt({
            type: 'list',
            name: 'start',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Role', 'Add An Employee', 'Update Employee Role']
        })
        .then(function(answer) {
            if (answer === 'View All Departments') {
                viewDepartments();
            } else if (answer === 'View All Roles') {
                return viewRoles();
            } else if (answer === 'View All Employees') {
                return viewEmployee();
            } else if (answer === 'Add A Role') {
                return addARole();
            } else if (answer === 'Add An Employee') {
                return addAnEmployee();
            } else if (answer === 'Update Employee Role') {
                return updateAnEmployee();
            }
        })
};

const viewDepartments = () => {
    return getDepartment();
}

const viewRoles = () => {
    return getRole();
}

const viewEmployee = () => {
    return getEmployee();
}

const addARole = () => {
    return addRole();
}

const addAnEmployee = () => {
    return AddEmployee();
}

const updateAnEmployee = () => {
    return updateEmployee();
}



startQuestion();
// getEmployee();
// updateEmployee();
// deleteEmployee();