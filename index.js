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
          case 'Add a department':
            return addDepartment();
          // Handle other cases
          case 'Exit':
          console.log('Goodbye!');
          process.exit();
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

function addDepartment() {
    inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the new department?',
    }).then((response) => {
        db.addDepartment(response.departmentName)
            .then(() => {
                console.log(`Added new department: ${response.departmentName}`);
                mainMenu();
            })
            .catch((err) => {
                console.log(err);
                mainMenu();
            });
    });
}

function addEmployee() {
    inquirer.prompt([
        {type: 'input',
        name: 'first_name',
        message: 'What is the first name of the new employee?'},
        {type: 'input',
        name: 'last_name',
        message: 'What is the last name of the new employee?'}
    ])
    // 3. After receiving the last name, you'll need to query your database for a list of possible roles.
    // This might look like calling a new function `db.getAllRoles()` that you would need to implement in your `db` module.
    // You will use these roles to populate the choices in the next `inquirer.prompt`.
    .then((answers) => {
      let firstName = answers.first_name;
      let lastName = answers.last_name;
      db.getAllRoles().then((roles) => {
        let roleChoices = roles.map((role) => {
            return {name: role.title, value: role.id};
        });    
    .then((roles) => 
    // 4. Once you have the list of roles, use `inquirer.prompt` to ask the user to select a role for the new employee.
    // The `type` for this prompt will be 'list', and the `choices` will be the roles that you queried from the database.
    inquirer.prompt([
        {type: 'list',
        name: 'role',
        message: 'What is the employee`s role?',
        choices: [roleChoices
          ]},
    ]))
    // 5. After receiving the chosen role, you'll need to convert that role to a role_id. This will depend on how your roles are structured,
    // but typically you would find the chosen role in your list of roles and get its id.
    role.title = role_id
    // 6. Next, you'll need to query your database for a list of existing employees to serve as the possible managers.
    // This might look like calling a new function `db.getAllEmployees()` that you would need to implement in your `db` module.
    db.getAllEmployees().then((employees) => {
      let managerChoices = employees.map((employee) => {
          return {name: `${employee.first_name} ${employee.last_name}`, value: employee.id};
      });
      managerChoices.push({name: "No Manager", value: null});
    // 7. Once you have the list of employees, use `inquirer.prompt` to ask the user to select a manager for the new employee.
    // Again, the `type` will be 'list', and the `choices` will be the employees that you queried from the database.
    inquirer.prompt([
        {type: 'list',
        name: 'manager',
        message: 'What is the employee`s manager?',
        choices: [managerChoices
          ]},
    ])
    // 8. After receiving the chosen manager, you'll need to convert that manager to a manager_id similar to the role_id.
    employee.id = manager_id

    // 9. Finally, with all the necessary information collected (first name, last name, role_id, and manager_id),
    // call `db.addEmployee()` as you're already doing, but pass an object that includes all these properties.
    .then (() => 
    const newEmployee = {
      first_name,
      last_name,
      role_id, 
      manager_id
  };
    db.addEmployee(newEmployee);
}