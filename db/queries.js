// file to hold functions that perform SQL queries related to departments, roles, and employees

const connection = require('./connection.js');

module.exports = {
    getAllDepartments: function () {
        return connection.query('SELECT * FROM department');
    },
    getAllRoles: function () {
        return connection.query('SELECT role.id, role.title, department.name AS department_name, role.salary FROM role JOIN department ON role.department_id = department.id');
    },
    getAllEmployees: function () {
        return connection.query('SELECT employee.id, employee.first_name, employee.last_name, department.name, role.title, role.salary FROM employee JOIN role on employee.role_id = role.id JOIN department on role.department_id = department.id');
    },
    addDepartment: function(departmentName) {
        return connection.query ('INSERT INTO department (name) VALUES (?)', departmentName);
    },
    addRole: function(role) {
        return connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [role.title, role.salary, role.department_id]);
    },
    addEmployee: function(employee) {
        return connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [employee.first_name, employee.last_name, employee.role_id, employee.manager_id]);
    },
    updateEmployeeRole: function(employeeId, newRoleId) {
        return connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
    }
}