// bring in Employee object
const Employee = require("./Employee");

// define engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // bring in args from parent "Employee"
    super(name, id, email);
    // create a new property unique to "Engineer"
    this.github = github;
  }
  // Override default role of "Employee"
  getRole() {
    return "Engineer";
  }
  // method unique to "Engineer"
  getGitHub() {
    return this.github;
  }
}
// allow class to be used in other files
module.exports = Engineer;
