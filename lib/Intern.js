const Employee = require('../lib/Employee')

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)

    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  // getRole() => Overridden to return 'Intern'
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;