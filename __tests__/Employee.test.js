//bring in the employee object
const Employee = require("../lib/Employee");

describe("Employee creation", () => {
  it("Can create a new Employee object", () => {
    //arrange
    const e = new Employee();
    //assert
    expect(typeof e).toBe("object");
  });
  it("Can set a name using constructor args", () => {
    //arrange
    const name = "Matt";
    //act
    const emp1 = new Employee(name);
    //assert
    expect(emp1.name).toBe(name);
  });
  it("Can set an id using constructor args", () => {
    //arrange
    const id = "1";
    //act
    const emp1 = new Employee("Foo", id);
    //assert
    expect(emp1.id).toBe(id);
  });
  it("Can set an email using constructor args", () => {
    //arrange
    const email = "test@test.com";
    //act
    const emp1 = new Employee("Foo", 1, email);
    //assert
    expect(emp1.email).toBe(email);
  });
});

// describe("Employee.name", () => {
//   it("Can get an email using constructor args", () => {
//     //arrange
//     const name = Employee.name;
//     //assert
//     expect(emp1.name).toBe(name);
//   });
// });
