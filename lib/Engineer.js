const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)

    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  // getRole() => overridden to return 'Engineer'
  getRole() {
    return "Engineer"
  }

  getHTML() {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
        <p class="card-text">ID: ${this.id}</p>
        <a href="https://www.github.com/${this.github}" class="card-link">GitHub</a>
        <a href="mailto:${this.email}" class="card-link">${this.email}</a>
    </div>
  </div>
  `
  }
}


module.exports = Engineer;