// pull in required libraries
const inquirer = require("inquirer");
// pull in class constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// pull helper functions
const generateHTML = require("./src/generateHTML");
const questions = require("./lib/Questions");

// array to hold constructed employee objects
let teamMembers = [];
// array to hold employee IDs
let idArray = [];

// function to choose an employee type, then call the function for the chosen employee type
function chooseEmployeeType() {
  inquirer.prompt(questions.employeeType).then((response) => {
    switch (response.type) {
      case "Engineer":
        getEngineer();
        break;
      case "Intern":
        getIntern();
        break;
      case "I'm finished creating new employees":
        console.log("Team creation complete. Generating HTML page...");
        console.log(teamMembers);
        // generateHTML(data);
        break;
    }
  });
}
// function to prompt for engineer questions
async function getEngineer() {
  await inquirer.prompt(questions.engineer).then((response) => {
    const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
    teamMembers.push(newEngineer);
    chooseEmployeeType();
  });
}

// function to prompt for intern questions
async function getIntern() {
  await inquirer.prompt(questions.intern).then((response) => {
    const newIntern = new Intern(response.name, response.id, response.email, response.school);
    teamMembers.push(newIntern);
    chooseEmployeeType();
  });
}

// main function to get user input, starting with the manager since it is required to build a team
async function init() {
  await inquirer.prompt(questions.manager).then((response) => {
    const newManager = new Manager(response.name, response.id, response.email, response.office);
    teamMembers.push(newManager);
    chooseEmployeeType();
  });
}

// initialize app
init();
