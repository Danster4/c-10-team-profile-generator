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

  getHTML() {
    return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
        <p class="card-text">ID: ${this.id}</p>
        <p class="card-text">Office Number: ${this.getOfficeNumber()}</p>
        <a href="mailto:${this.email}" class="card-link">${this.email}</a>
    </div>
  </div>
  `
  }
}

// const john = new Manager('John', 44, "john@email.com", 5454)
// console.log(john.getHTML())

module.exports = Manager;