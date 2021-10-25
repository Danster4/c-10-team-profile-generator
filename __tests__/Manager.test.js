const Manager = require("../lib/Manager");

test('tests if manager is a new object created', () => {
  const manager = new Manager('Ron', 14, 'john@company.com', 419)

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
})