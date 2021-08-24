// Bring in Employee object
const Employee = require("./Employee");

//define manager class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // bring in args from parent "Employee"
    super(name, id, email);
    // variable unique to "Manager"
    this.officeNumber = officeNumber;
  }
  // Override default role of "Employee"
  getRole() {
    return "Manager";
  }
  // method unique to "Manager"
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
