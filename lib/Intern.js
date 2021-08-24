// bring in employee object
const Employee = require("./Employee");
// create class for "Intern"
class Intern extends Employee {
  // bring in properties from parent "Employee"
  constructor(name, id, email, school) {
    super(name, id, email);
    // property unique to "Intern"
    this.school = school;
  }
  // override default role of "Employee"
  getRole() {
    return "Intern";
  }
  // method unique to "Intern"
  getSchool() {
    return this.school;
  }
}

//export class to be used in other files
module.exports = Intern;
