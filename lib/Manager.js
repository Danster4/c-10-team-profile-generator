const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email) 
    this.officeNumber = officeNumber
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  // getRole() => overridden to return 'Manager'
  getRole() {
    return "Manager"
  }

  getHTMLCode() {
    return `
    
    `;
  }
}


module.exports = Manager;