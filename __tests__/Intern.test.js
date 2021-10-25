const Intern = require('../lib/Intern');

test('tests if intern is a new object created', () => {
  const intern = new Intern('Alex', 78, 'alex224@miami.edu', 'University of Miami')
  
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
})