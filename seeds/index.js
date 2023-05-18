const inquirer = require('inquirer');
const db = require('./db/queries');

function mainMenu() {
    inquirer
      .prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit',
        ],
      })
      .then((response) => {
        switch (response.action) {
          case 'View all departments':
            return viewAllDepartments();
          case 'View all roles:':
            return viewAllRoles();
          case 'View all employees':
            return viewAllEmployees();
          // Handle other cases
          case 'Exit':
            connection.end();
            break;
            default:
            console.log(`Invalid action: ${response.action}`);
            mainMenu();
        }
      })

function viewAllDepartments() {
db.getAllDepartments()
    .then((departments) => {
    console.table(departments);
    mainMenu();
    })
    .catch((err) => {
    console.log(err);
    mainMenu();
    });
  }
function viewAllRoles() {
db.getAllRoles()
    .then((roles) => {
    console.table(roles);
    mainMenu();
    })
    .catch((err) => {
    console.log(err);
    mainMenu();
    });
  }
function viewAllEmployees() {
db.getAllEmployees()
    .then((employees) => {
    console.table(employees);
    mainMenu();
    })
    .catch((err) => {
    console.log(err);
    mainMenu();
    });
    }
}
