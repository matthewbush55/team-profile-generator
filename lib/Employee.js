class Employee {
  constructor(name, id, email) {
    // constructor properties for "Employee"
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // functions to return each property's value
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
// make this class usable in other files
module.exports = Employee;
