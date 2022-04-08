const inquirer = require("inquirer");
const questions = [
  {
    type: "input",
    message: "Enter manager name.",
    name: "name",
  },

  {
    type: "input",
    message: "Enter manager ID.",
    name: "ID",
  },

  {
    type: "input",
    message: "Enter manager's email address.",
    name: "email",
  },

  {
    type: "list",
    name: "managerConfirm",
    message: "Are you a manager?",
    choices: ["Yes", "No"],
  },

  // Gives the option for a user to continue adding employees.
  {
    type: "list",
    name: "addEmployeeConfirm",
    message: "Would you like to add another employee?",
    choices: ["Engineer", "Intern", "Finish building"],
  },
];
const questionsEngineer = [
    {
        type: "input",
        message: "Enter GitHub username.",
        name: "github",
      },
]
const questionsIntern = [
    {
        type: "input",
        message: "Where do you attend school?",
        name: "school",
      },
]

function Employee(name, ID, email) {
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.getName = () => {
        console.log(name);
    };
    this.getID = () => {
        console.log(ID);
    };
    this.getEmail = () => {
        console.log(email);
    };
};


function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    if (answers.addEmployeeConfirm === "Engineer") {
      inquirer.prompt(questionsEngineer).then((answers) => {
        console.log(answers);
      });
    }
    if (answers.addEmployeeConfirm === "Intern") {
      inquirer.prompt(questionsIntern).then((answers) => {
        console.log(answers);
      });
    } else {
        return(answers);
    }
  });
}

init();

module.export(Employee());