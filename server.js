const inquirer = require('inquirer');
const connection = require('./db/database');
const Employee = require('./lib/employee');
const Department = require('./lib/department');
const role = require('./lib/role');

const Employee_Database = new Employee(connection)

// const Department_Database = new Department(connection)

const startQuestion = () => {
    return inquirer.prompt({
            type: 'list',
            name: 'start',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Role', 'Add An Employee', 'Update Employee Role', 'Quit']
        })
        .then(function({ start }) {

            switch (start) {
                case "View All Employees":
                    Employee_Database.getEmployee();
                case "Quit":
                    process.exit(0)
            }
            // if (answer === 'View All Departments') {
            //     viewDepartments();
            // } else if (answer === 'View All Roles') {
            //     return viewRoles();
            // } else if (answer === 'View All Employees') {
            //     return viewEmployee();
            // } else if (answer === 'Add A Role') {
            //     return addARole();
            // } else if (answer === 'Add An Employee') {
            //     return addAnEmployee();
            // } else if (answer === 'Update Employee Role') {
            //     return updateAnEmployee();
            // }
        })
};

// const viewDepartments = () => {
//     return getDepartment();
// }

// const viewRoles = () => {
//     return getRole();
// }

// const viewEmployee = () => {
//     return getEmployee();
// }

// const addARole = () => {
//     return addRole();
// }

// const addAnEmployee = () => {
//     return Employee_Database.AddEmployee();
// }

// const updateAnEmployee = () => {
//     return updateEmployee();
// }



startQuestion();
// // getEmployee();
// // updateEmployee();
// // deleteEmployee();