// file to hold functions that perform SQL queries related to departments, roles, and employees

const connection = require('./db/connection.js');

module.exports = {
    getAllDepartments: function () {
        return connection.query('SELECT * FROM department');
    },
    getAllRoles: function () {
        return connection.query('SELECT * FROM role');
    },
    getAllEmployees: function () {
        return connection.query('SELECT * FROM employee');
    },
    addDepartment: function(departmentName) {
        return connection.query ('INSERT INTO department (name) VALUES (?)', departmentName);
    },
    addRole: function(role) {
        return connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [role.title, role.salary, role.department_id]);
    },
    addEmployee: function(employee) {
        return connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [employee.first_name, employee.last_name, employee.role_id, employee.manager_id]);
    }
}