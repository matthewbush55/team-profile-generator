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
  it("Can return the Intern name value when the getName function is invoked", () => {
    //arrange
    const name = "Matt";
    //act
    const intern1 = new Intern("Matt");
    //assert
    expect(intern1.getName()).toBe(name);
  });
  it("Can return the Intern id value when the getId function is invoked", () => {
    //arrange
    const id = 1;
    //act
    const intern1 = new Intern("Matt", id);
    //assert
    expect(intern1.getId()).toBe(id);
  });
  it("Can return the Intern email value when the getEmail function is invoked", () => {
    //arrange
    const email = "test@test.com";
    //act
    const intern1 = new Intern("Matt", 1, email);
    //assert
    expect(intern1.getEmail()).toBe(email);
  });
  it("Can return the Intern role value when the getRole function is invoked", () => {
    //arrange
    const role = "Intern";
    //act
    const intern1 = new Intern("Matt", 1, "test@test.com", role);
    //assert
    expect(intern1.getRole()).toBe(role);
  });
  it("Can return the Intern school value when the getSchool function is invoked", () => {
    //arrange
    const school = "DU";
    //act
    const intern1 = new Intern("Matt", 1, "test@test.com", school);
    //assert
    expect(intern1.getSchool()).toBe(school);
  });
});
