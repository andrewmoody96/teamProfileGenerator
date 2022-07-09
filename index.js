const inquirer = require("inquirer");
const fs = require("fs");

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

function start() {
  // resets employee array values;
  manager = [];
  engineers = [];
  interns = [];

  // begins questions
  inquirer.prompt(questions).then((answers) => {
    if (answers.roleConfirm === "Manager") {
      console.log("Employee is a manager.");
      let newManager = new Manager(
        `${answers.name}`,
        `${answers.ID}`,
        `${answers.email}`,
        `${answers.office}`
      );
      managers.push(newManager);
      console.log(managers);
    }
    if (answers.roleConfirm === "Engineer") {
      let newEngineer = new Engineer(
        `${answers.name}`,
        `${answers.ID}`,
        `${answers.email}`,
        `${answers.github}`
      );
      engineers.push(newEngineer);
      console.log(newEngineer);
    }
    if (answers.roleConfirm === "Intern") {
      let newIntern = new Intern(
        `${answers.name}`,
        `${answers.ID}`,
        `${answers.email}`,
        `${answers.school}`
      );
      interns.push(newIntern);
      console.log(newIntern);
    }
    if (answers.addEmployeeConfirm === "Yes") {
      start();
    } else {
      console.log("Goodbye!");
      generateHTML();
      process.exit(0);
    }
  });
}

function generateHTML() {
  let managerContent = `<div class="teamMember"><div class="dataRow">`;
  managers.forEach((manager) => {
    managerContent =
      managerContent +
      `<h5>${manager.name}</h5><h5>${manager.ID}</h5></div><div class="dataRow"><h5>${manager.office}</h5><h5>${manager.email}</h5></div>`;
  });

  let engineerContent = `<div class="teamMember"><div class="dataRow">`;
  engineers.forEach((engineer) => {
    engineerContent = engineerContent`<h5>${engineer.name}</h5><h5>${engineer.ID}</h5></div><div class="dataRow"><h5>${engineer.github}</h5><h5>${engineer.email}</h5></div>`;
  });

  let internContent = `<div class="teamMember"><div class="dataRow">`;
  interns.forEach((intern) => {
    internContent =
      internContent +
      `<h5>${intern.name}</h5><h5>${intern.ID}</h5></div><div class="dataRow"><h5>${intern.school}</h5><h5>${intern.email}</h5></div></div>`;
  });

  const beginHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Builder</title>
      <script
        src="https://kit.fontawesome.com/8c50fad431.js"
        crossorigin="anonymous"
      ></script>
      <link href="../assets/CSS/style.css" rel="stylesheet">
  </head>
  <body>
      <header class="flex">
          <h1 class="text-center">Your Team</h1>
      </header>`;
  const contentHTML = `<article>
        <div id="teamConatiner">
          <div id="engineers">
            <h3>Engineers</h3>
            ${engineerContent}
          </div>
          <div id="managers">
            <h3>Managers</h3>
            ${managerContent}
          </div>
          <div id="interns">
            <h3>Interns</h3>
            ${internContent}
          </div>
        </div>  
      </article>`;
  const endHTML = `<footer id="footer">
    <p>This web page was dynamically generated using node.js.</p>
    <section id="contactme-id" class="contactme">
        <h4>Contact the Developer</h2>
        <div id="contactOptions">
          <h4>
            <a
              href="https://www.linkedin.com/in/andrew-moody-919a42165/"
              title="Linkedin"
              class="fa-brands fa-linkedin"
              target="_blank"
            > Linkedin</a>
          </h4>
          <h4>
            <a
              href="mailto:andrew.moody96@gmail.com"
              title="Email"
              class="fa-regular fa-envelope"
              target="_blank"
            > Email</a>
          </h4>
          <h4>
            <a
              href="https://github.com/andrewmoody96"
              title="GitHub"
              class="fa-brands fa-github"
              target="_blank"
            > GitHub</a>
          </h4>
        </div>
      </section>
    <p>&copy; 2022 - Andrew Moody</p>
  </footer>
  </body>
  </html>;`;

  const HTML = beginHTML + contentHTML + endHTML;
  console.log(HTML);
  fs.writeFileSync("./src/index.html", HTML);
}

start();
