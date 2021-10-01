const Engineer = require('./engineer');

it("Should get correct Github", () => {
  const engineer = new Engineer("SomeName", 1, "some@email.com", "SomeGithub");
  expect(engineer.getgithub()).toEqual("SomeGithub")
})
