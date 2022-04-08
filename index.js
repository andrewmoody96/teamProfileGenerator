const inquirer = require("inquirer");
const questionsManager = [
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



function init() {
  inquirer.prompt(questionsManager).then((answers) => {
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
