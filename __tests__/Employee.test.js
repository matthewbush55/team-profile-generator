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
  it("Can return the Employee name value when the getName function is invoked", () => {
    //arrange
    const name = "Matt";
    //act
    const emp1 = new Employee("Matt");
    //assert
    expect(emp1.getName()).toBe(name);
  });
  it("Can return the Employee id value when the getId function is invoked", () => {
    //arrange
    const id = 1;
    //act
    const emp1 = new Employee("Matt", id);
    //assert
    expect(emp1.getId()).toBe(id);
  });
  it("Can return the Employee email value when the getEmail function is invoked", () => {
    //arrange
    const email = "test@test.com";
    //act
    const emp1 = new Employee("Matt", 1, email);
    //assert
    expect(emp1.getEmail()).toBe(email);
  });
  it("Can return the Employee role value when the getRole function is invoked", () => {
    //arrange
    const role = "Employee";
    //act
    const emp1 = new Employee("Matt", 1, "test@test.com", role);
    //assert
    expect(emp1.getRole()).toBe(role);
  });
});
