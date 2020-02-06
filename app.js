"use strict";

const Employee = require(".//lib/employee");
const Manager = require(".//lib/manager");
const Engineer = require(".//lib/engineer");
const Intern = require(".//lib/intern");
const inquirer = require("inquirer");
const { writeFile } = require("fs");

////prompt to add manager
///

async function promptUser() {
  try {
    const response = await inquirer.prompt([
      {
        type: "input",
        name: "manager-name",
        message: "What is your manager's name?",
        validate: answer => {
          if (isNaN(answer) && answer !== " ") {
            return true;
          } else {
            throw Error("Please enter your Managers name");
          }
        }
      },
      {
        type: "input",
        name: "manager-id",
        message: "What is your manager's ID?",
        validate: answer => {
          if (!isNaN(answer)) {
            return true;
          } else {
            throw Error("Please enter a number");
          }
        }
      },
      {
        type: "input",
        name: "manager-email",
        message: "What is your manager's email?",
        validate: answer => {
          if (
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer) &&
            answer !== " "
          ) {
            return true;
          }
          return Error("Please enter a valid email address!");
        }
      },
      {
        type: "input",
        name: "manager-officenumber",
        message: "What is your manager's office number?",
        validate: answer => {
          if (!isNaN(answer)) {
            return true;
          } else {
            throw Error("Please enter a number");
          }
        }
      }
    ]);
    console.log(response);
  } catch (error) {
    console.log("try again");
  }
  addEmployee();
}

//////////
// ASK IF THEY WOULD LIKE TO ADD ANOTHER EMPLOYEE
//////
async function addEmployee() {
  try {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "addnew",
        message: "Would you like to add a new employee?",
        choices: ["Manager", "Intern", "Engineer", "No"]
      }
    ]);
    if (answer.addnew === "Manager") {
      promptUser();
    } else if (answer.addnew === "Intern") {
      addIntern();
    } else if (answer.addnew === "Engineer") {
      addEngineer();
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

///promt to add intern info
//////

async function addIntern() {
  try {
    const response = await inquirer.prompt([
      {
        type: "input",
        name: "intern-name",
        message: "What is your Intern's name?",
        validate: answer => {
          if (isNaN(answer) && answer !== " ") {
            return true;
          } else {
            throw Error("Please enter your Interns name");
          }
        }
      },
      {
        type: "input",
        name: "intern-id",
        message: "What is your Intern's id?",
        validate: answer => {
          if (!isNaN(answer)) {
            return true;
          } else {
            throw Error("Please enter your Interns id");
          }
        }
      },
      {
        type: "input",
        name: "intern-email",
        message: "What is your Intern's email?",
        validate: answer => {
          if (isNaN(answer) && answer !== " ") {
            return true;
          } else {
            throw Error("Please enter your Interns email");
          }
        }
      },
      {
        type: "input",
        name: "intern-school",
        message: "What is your Intern's School?",
        validate: answer => {
          if (isNaN(answer) && answer !== " ") {
            return true;
          } else {
            throw Error("Please enter your Interns School");
          }
        }
      }
    ]);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  addEmployee();
}

////prompt to add engineer
/////

async function addEngineer() {
  try {
    const response = await inquirer.prompt([
      {
        type: "input",
        name: "engineer-name",
        message: "What is your Engineer's name?",
        validate: answer => {
          if (isNaN(answer) && answer !== " ") {
            return true;
          } else {
            throw Error("Please enter your Interns name");
          }
        }
      },
      {
        type: "input",
        name: "engineer-id",
        message: "What is your engineer's id?",
        validate: answer => {
          if (!isNaN(answer)) {
            return true;
          } else {
            throw Error("Please enter your engineers id");
          }
        }
      },
      {
        type: "input",
        name: "engineer-email",
        message: "What is your engineer's email?",
        validate: answer => {
          if (isNaN(answer) && answer !== " ") {
            return true;
          } else {
            throw Error("Please enter your Interns email");
          }
        }
      },
      {
        type: "input",
        name: "engineer-github",
        message: "What is your engineer's Github username?",
        validate: answer => {
          if (isNaN(answer) && answer !== " ") {
            return true;
          } else {
            throw Error("Please enter your Engineers Github username");
          }
        }
      }
    ]);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  addEmployee();
}

promptUser();
