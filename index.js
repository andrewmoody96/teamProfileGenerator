const inquirer = require("inquirer");

// QUESTIONS
const questions = [
  {
    type: "input",
    message: "What is your name name?",
    name: "name",
  },

  {
    type: "input",
    message: "Enter employee ID.",
    name: "ID",
  },

  {
    type: "input",
    message: "Enter your email address.",
    name: "email",
  },

  {
    type: "list",
    name: "managerConfirm",
    message: "Are you a manager?",
    choices: ["Yes", "No"],
  },

  {
    type: "input",
    message: "What is your office number?",
    name: "office",
    when(answers) {
      return answers.managerConfirm === "Yes";
    },
  },

  // Gives the option for a user to continue adding employees.
  {
    type: "list",
    name: "addEmployeeConfirm",
    message: "Would you like to add another employee?",
    choices: ["Engineer", "Intern", "Finish"],
    when(answers) {
      return answers.managerConfirm === "Yes";
    },
  },

  // Only displayed if user adds an Engineer to the roster.
  {
    type: "input",
    message: "Enter GitHub username.",
    name: "github",
    when(answers) {
      return answers.addEmployeeConfirm === "Engineer";
    },
  },

  // Only displayed if user adds an Intern to the roster.
  {
    type: "input",
    message: "Where do you attend school?",
    name: "school",
    when(answers) {
      return answers.addEmployeeConfirm === "Intern";
    },
  },
];

// CONSTRUCTORS
function Employee(name, ID, email) {
  // properties
  this.name = name;
  this.ID = ID;
  this.email = email;
  const role = "employee"
  // methods
  this.getName = () => {
    console.log(this.name);
  };
  this.getID = () => {
    console.log(this.ID);
  };
  this.getEmail = () => {
    console.log(this.email);
  };
  this.getRole = () => {
    console.log(role);
  }
}
function Manager(name, ID, email, office) {
  // properties
  this.name = name;
  this.ID = ID;
  this.email = email;
  this.office = office;
  const role = "manager";
  // methods
  this.getName = () => {
    console.log(this.name);
  };
  this.getID = () => {
    console.log(this.ID);
  };
  this.getEmail = () => {
    console.log(this.email);
  };
  this.getOffice = () => {
    console.log(this.office);
  };
  this.getRole = () => {
    console.log(role);
  };
}
function Engineer(name, ID, email, github) {
  // properties
  this.name = name;
  this.ID = ID;
  this.email = email;
  this.github = github;
  const role = "engineer";
  // methods
  this.getName = () => {
    console.log(this.name);
  };
  this.getID = () => {
    console.log(this.ID);
  };
  this.getEmail = () => {
    console.log(this.email);
  };
  this.getGithub = () => {
    console.log(this.github);
  };
  this.getRole = () => {
    console.log(role);
  };
}
function Intern(name, ID, email, school) {
  // properties
  this.name = name;
  this.ID = ID;
  this.email = email;
  this.school = school;
  const role = "intern";
  // methods
  this.getName = () => {
    console.log(this.name);
  };
  this.getID = () => {
    console.log(this.ID);
  };
  this.getEmail = () => {
    console.log(this.email);
  };
  this.getSchool = () => {
    console.log(this.school);
  };
  this.getRole = () => {
    console.log(role);
  };
}

// const testEmployee = new Employee('Andrew', 615, 'andrew.moody96@gmail.com');

// testEmployee.getID();


// If Manager > change role to "manager"
// If Intern > change role to "intern"
// If Engineer > change role to "engineer"
// Role needs to update depending on user input...
// Every time the function is run, we need to put an employee into the 'roster.json' as a new object.
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    return answers;
  });
}

module.exports = Employee, Manager, Engineer, Intern;

init();
