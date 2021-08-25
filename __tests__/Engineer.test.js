const Engineer = require("../lib/Engineer");

describe("Engineer creation", () => {
  it("Can create a new Engineer object", () => {
    //arrange
    const eng1 = new Engineer();
    //assert
    expect(typeof eng1).toBe("object");
  });
  it("Can set a name using super", () => {
    // arrange
    const name = "Matt";
    // act
    const eng1 = new Engineer(name);
    //assert
    expect(eng1.name).toBe(name);
  });
  it("Can set an id using using super", () => {
    // arrange
    const id = "1";
    // act
    const eng1 = new Engineer("Foo", id);
    //assert
    expect(eng1.id).toBe(id);
  });
  it("Can set a email using using super", () => {
    // arrange
    const email = "test@test.com";
    // act
    const eng1 = new Engineer("Foo", 1, email);
    //assert
    expect(eng1.email).toBe(email);
  });
  it("Can set a github using constructor args", () => {
    // arrange
    const github = "tester";
    // act
    const eng1 = new Engineer("Foo", 1, "test@test.com", github);
    //assert
    expect(eng1.github).toBe(github);
  });
  it("Can return the Engineer name value when the getName function is invoked", () => {
    //arrange
    const name = "Matt";
    //act
    const eng1 = new Engineer("Matt");
    //assert
    expect(eng1.getName()).toBe(name);
  });
  it("Can return the Engineer id value when the getId function is invoked", () => {
    //arrange
    const id = 1;
    //act
    const eng1 = new Engineer("Matt", id);
    //assert
    expect(eng1.getId()).toBe(id);
  });
  it("Can return the Engineer email value when the getEmail function is invoked", () => {
    //arrange
    const email = "test@test.com";
    //act
    const eng1 = new Engineer("Matt", 1, email);
    //assert
    expect(eng1.getEmail()).toBe(email);
  });
  it("Can return the Engineer role value when the getRole function is invoked", () => {
    //arrange
    const role = "Engineer";
    //act
    const eng1 = new Engineer("Matt", 1, "test@test.com", role);
    //assert
    expect(eng1.getRole()).toBe(role);
  });
  it("Can return the Engineer GitHub value when the getGitHub function is invoked", () => {
    //arrange
    const github = "test123";
    //act
    const eng1 = new Engineer("Matt", 1, "test@test.com", github);
    //assert
    expect(eng1.getGitHub()).toBe(github);
  });
});
