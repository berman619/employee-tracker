// file to hold functions that perform SQL queries related to departments, roles, and employees

// function to return a list of all departments
function getAllDepartments() {
    // use the connection object to create a new query
    return connection.query('SELECT * FROM department');
  }

function getAllRoles() {
    return connection.query('SELECT * FROM role');
}

function getAllEmployees() {
    return connection.query('SELECT * FROM employee');
}

function addDepartment(departmentName) {
    return connection.query ('INSERT INTO department (name) VALUES (?)', departmentName);
}

function addRole(role) {
    return connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [role.title, role.salary, role.department_id]);
}

function addEmployee(employee) {
    return connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [employee.first_name, employee.last_name, employee.role_id, employee.manager_id]);
}