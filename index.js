const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-site.js');
const pageTemplate = require('./src/page-template.js');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// empty array for number of employees created
employeeBucket = [];

const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your Manager\'s name?',
    validate: managerNameInput => {
      if (managerNameInput) {
        return true;
      } else {
        console.log("Please enter your manager\'s name!");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Enter your team manager\'s employee ID',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter your team manager\'s employee ID!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your team manager\'s email address',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your team manager\'s email address!");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'officeNumber',
    message: 'Enter your team manager\'s office number',
    validate: officeInput => {
      if (officeInput) {
        return true;
      } else {
        console.log("Please enter your team manager\'s office number!");
        return false;
      }
    }
  },
]

const employeeQuestions = [
  {
    type: 'list',
    name: 'addEmployee',
    message: 'Would you like to add a new Employee to your team? (Engineer or Intern)',
    choices: [
      "Yes, please add an Engineer to my team",
      "Yes, please add an Intern to my team",
      "No, there are no more team members to add"
    ]
  }

]

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is this engineer\'s name?',
    validate: engineerNameInput => {
      if (engineerNameInput) {
        return true;
      } else {
        console.log("Please enter your engineer\'s name!");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Enter this engineer\'s employee ID',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter this engineer\'s employee ID!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your team manager\'s email address',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your team manager\'s email address!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter this engineer\'s GitHub username',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter this engineer\'s GitHub username!");
        return false;
      }
    }
  },
]

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is this intern\'s name?',
    validate: internNameInput => {
      if (internNameInput) {
        return true;
      } else {
        console.log("Please enter your intern\'s name!");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Enter this intern\'s employee ID',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter this intern\'s employee ID!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your intern\'s email address',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your intern\'s email address!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter this intern\'s school name',
    validate: schoolInput => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Please enter this intern\'s school name!");
        return false;
      }
    }
  },
]

// addManager() function (a.k.a. intialize app function) prompts questions and creates new Manager object and adds to employeeBucket array
const addManager = async() => {
  const result = await inquirer.prompt(managerQuestions)
  
  const managerOccurance = new Manager(
    result.name,
    result.id,
    result.email,
    result.officeNumber
  );
  employeeBucket.push(managerOccurance);
  addEmployee();
};

// addEmployee() function acts as a switchboard to addEngineer(), addIntern(), and exiting inquirer and generatePage();
const addEmployee = async() => {
  const result = await inquirer.prompt(employeeQuestions)
  .then(function(result) {
    switch (result.addEmployee) {
      case "Yes, please add an Engineer to my team":
        addEngineer();
        break;

      case "Yes, please add an Intern to my team":
        addIntern();
        break;

      case "No, there are no more team members to add":
        writeFile(employeeBucket);
        break;
    }
  })
}

// addEngineer() function prompts questions and creates new Engineer object and adds to employeeBucket array
const addEngineer = async() => {
  const result = await inquirer.prompt(engineerQuestions)

  const engineerOccurance = new Engineer(
    result.name,
    result.id,
    result.email,
    result.github
  )
  employeeBucket.push(engineerOccurance);
  addEmployee();
}

// addIntern() function prompts questions and creates new Intern object and adds to employeeBucket array
const addIntern = async() => {
  const result = await inquirer.prompt(internQuestions)

  const internOccurance = new Intern(
    result.name,
    result.id,
    result.email,
    result.school
  )
  employeeBucket.push(internOccurance)
  addEmployee();
}

// call addManager function to start/initialize CLI application
addManager();