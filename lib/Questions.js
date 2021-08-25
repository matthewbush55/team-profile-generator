// employee type question
const employeeType = [
  {
    type: "list",
    message: "What type of employee would you like to add?",
    name: "type",
    choices: ["Engineer", "Intern", "I'm finished creating employees"],
  },
];
// manager questions
const managerQuestions = [
  {
    type: "input",
    message: "Please input your name",
    name: "name",
  },
  {
    type: "input",
    message: "Please input your id",
    name: "id",
  },
  {
    type: "input",
    message: "Please input your email",
    name: "email",
  },
  {
    type: "input",
    message: "Please input your office number",
    name: "office",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Please input your name",
    name: "name",
  },
  {
    type: "input",
    message: "Please input your id",
    name: "id",
  },
  {
    type: "input",
    message: "Please input your email",
    name: "email",
  },
  {
    type: "input",
    message: "Please input your GitHub username",
    name: "github",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Please input your name",
    name: "name",
  },
  {
    type: "input",
    message: "Please input your id",
    name: "id",
  },
  {
    type: "input",
    message: "Please input your email",
    name: "email",
  },
  {
    type: "input",
    message: "Please input your school name",
    name: "school",
  },
];

module.exports = {
  manager: managerQuestions,
  engineer: engineerQuestions,
  intern: internQuestions,
  employeeType: employeeType,
};
