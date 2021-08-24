// bring in "Manager" constructor class
const Manager = require("../lib/Manager");

describe("Manager creation", () => {
  it("Can create a new Manager object", () => {
    //arrange
    const manager1 = new Manager();
    //assert
    expect(typeof manager1).toBe("object");
  });
  it("Can set name via super", () => {
    //arrange
    const name = "Matt";
    //act
    const manager1 = new Manager(name);
    //assert
    expect(manager1.name).toBe(name);
  });
  it("Can set an id using super", () => {
    //arrange
    const id = 1;
    //act
    const manager1 = new Manager("Foo", id);
    //assert
    expect(manager1.id).toBe(id);
  });
  it("Can set an email using super", () => {
    //arrange
    const email = "test@test.com";
    //act
    const manager1 = new Manager("Matt", 1, email);
    //assert
    expect(manager1.email).toBe(email);
  });
  it("Can set an office number using constructor args", () => {
    //arrange
    const officeNumber = 555;
    //act
    const manager1 = new Manager("Matt", 1, "test@test.com", officeNumber);
    //assert
    expect(manager1.officeNumber).toBe(officeNumber);
  });
  it("Can get office number using getOfficeNumber()", () => {
    //arrange
    const officeNumber = 555;
    //act
    const mgr1 = new Manager("Matt", 1, "test@test.com", officeNumber);
    //assert
    expect(mgr1.getOfficeNumber()).toBe(officeNumber);
  });
  it("Can get the overridden role for the class", () => {
    //arrange
    const role = "Manager";
    //act
    const mgr1 = new Manager("Matt", 1, "test@test.com", 555);
    //assert
    expect(mgr1.getRole()).toBe(role);
  });
});
