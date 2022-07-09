const inquirer = require("inquirer");

// QUESTIONS
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },

  {
    type: "number",
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
    name: "roleConfirm",
    message: "What is your role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "number",
    message: "What is your office number? (1-3)",
    name: "office",
    when(answers) {
      return answers.roleConfirm === "Manager";
    },
  },

  // Only displayed if user adds an Engineer to the roster.
  {
    type: "input",
    message: "Enter GitHub username.",
    name: "github",
    when(answers) {
      return answers.roleConfirm === "Engineer";
    },
  },

  // Only displayed if user adds an Intern to the roster.
  {
    type: "input",
    message: "Where do you attend school?",
    name: "school",
    when(answers) {
      return answers.roleConfirm === "Intern";
    },
  },

  // Gives the option for a user to continue adding employees.
  {
    type: "list",
    name: "addEmployeeConfirm",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
  },
];

// CONSTRUCTORS
function Manager(name, ID, email, office) {
  // properties
  this.name = name;
  this.ID = ID;
  this.email = email;
  this.office = office;
  const role = "manager";
}
function Engineer(name, ID, email, github) {
  // properties
  this.name = name;
  this.ID = ID;
  this.email = email;
  this.github = github;
  const role = "engineer";
}
function Intern(name, ID, email, school) {
  // properties
  this.name = name;
  this.ID = ID;
  this.email = email;
  this.school = school;
  const role = "intern";
}

// ARRAYS
let managers = [];
let engineers = [];
let interns = [];


function init() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.roleConfirm === "Manager") {
      console.log("Employee is a manager.");
      let newManager = new Manager(
        `${answers.name}`,
        `${answers.ID}`,
        `${answers.email}`,
        `${answers.office}`
      );
      // managers.push(newManager);
      console.log(newManager);
    }
    if (answers.roleConfirm === "Engineer") {
      let newEngineer = new Engineer(
        `${answers.name}`,
        `${answers.ID}`,
        `${answers.email}`,
        `${answers.github}`
      );
      // engineers.push(newEngineer);
      console.log(newEngineer);
    }
    if (answers.roleConfirm === "Intern") {
      let newIntern = new Intern(
        `${answers.name}`,
        `${answers.ID}`,
        `${answers.email}`,
        `${answers.school}`
      );
      // interns.push(newIntern);
      console.log(newIntern);
    }
    if (answers.addEmployeeConfirm === "Yes") {
      init();
    } else {
      console.log("Goodbye!");
      process.exit(0);
    }
  });
}

init();

module.exports = (managers, engineers, interns);
