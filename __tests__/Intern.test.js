// bring in "Intern" constructor class
const Intern = require("../lib/Intern");

describe("Intern creation", () => {
  it("Create a new Intern object", () => {
    //arrange
    const intern = new Intern();
    //assert
    expect(typeof intern).toBe("object");
  });
  it("Can set a name using super", () => {
    //arrange
    const name = "Matt";
    //act
    const intern1 = new Intern(name);
    //assert
    expect(intern1.name).toBe(name);
  });
  it("Can set an id using super", () => {
    //arrange
    const id = 1;
    //act
    const intern1 = new Intern("Matt", id);
    //assert
    expect(intern1.id).toBe(id);
  });
  it("Can set an email using super", () => {
    //arrange
    const email = "test@test.com";
    //act
    const intern1 = new Intern("Matt", 1, email);
    //assert
    expect(intern1.email).toBe(email);
  });
  it("Can set a school name using constructor args", () => {
    //arrange
    const school = "BYU";
    //act
    const intern1 = new Intern("Matt", 1, "test@test.com", school);
    //assert
    expect(intern1.school).toBe(school);
  });
});
