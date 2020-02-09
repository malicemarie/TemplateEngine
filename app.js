"use strict";
console.clear();

const Manager = require(".//lib/manager");
const Engineer = require(".//lib/engineer");
const Intern = require(".//lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");

let managers = [];
let engineers = [];
let interns = [];

// Promt to add a Manager

async function promptUser() {
  try {
    const response = await inquirer.prompt([
      {
        type: "input",
        name: "managername",
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
        name: "managerid",
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
        name: "manageremail",
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
        name: "managerofficenumber",
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

    const newManager = new Manager(
      response.managername,
      response.managerid,
      response.manageremail,
      response.managerofficenumber
    );
    // console.log(newManager);
    managers.push(newManager);
  } catch (error) {
    alert("try again");
  }
  addEmployee();
}

// Prompt to add an Intern

async function addIntern() {
  try {
    const response = await inquirer.prompt([
      {
        type: "input",
        name: "internname",
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
        name: "internid",
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
        name: "internemail",
        message: "What is your Intern's email?",
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
        name: "internschool",
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
    interns.push(
      new Intern(
        response.internname,
        response.internid,
        response.internemail,
        response.internschool
      )
    );
  } catch (error) {}
  addEmployee();
}

// Prompt to add an Engineer

async function addEngineer() {
  try {
    const response = await inquirer.prompt([
      {
        type: "input",
        name: "engineername",
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
        name: "engineerid",
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
        name: "engineeremail",
        message: "What is your engineer's email?",
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
        name: "engineergithub",
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
    engineers.push(
      new Engineer(
        response.engineername,
        response.engineerid,
        response.engineeremail,
        response.engineergithub
      )
    );
  } catch (error) {
    alert("error");
  }
  addEmployee();
}

// Create cards for each employee type
// Engineer Card

async function createEngineerHTML(engineers) {
  let html = "";
  for (const engineer of engineers) {
    html += `<div class="card eng-card col-lg-3 col-md-6 col-sm-12" id="cards">
    <div class="card-head">
      <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <p class="card-text">${engineer.getRole()}</p>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">
        Email:
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${
            engineer.email
          }"
          target="_blank"
          >${engineer.email}</a
        >
      </li>
      <li class="list-group-item">
        GitHub:
        <a
          href="https://github.com/${engineer.github}"
          class="card-link"
          >@${engineer.getGithub()}</a
        >
      </li>
    </ul>
  </div>`;
  }
  //   console.log(html);
  return html;
}
// Manager Card
async function createManagerHTML(managers) {
  let html = "";
  for (const manager of managers) {
    html += ` <div class="card mgmt-card col-lg-3 col-md-6 col-sm-12" id="cards">
    <div class="card-head">
      <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <p class="card-text">${manager.getRole()}</p>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">
        Email:
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${
            manager.email
          }"
          target="_blank"
          >${manager.email}</a
        >
      </li>
      <li class="list-group-item">
        Office Number: ${manager.getOfficeNumber()}
      </li>
    </ul>
  </div>`;
  }

  return html;
}
// Intern Card
async function createInternHTML(interns) {
  let html = "";
  for (const intern of interns) {
    html += `<div class="card intern-card col-lg-3 col-md-6 col-sm-12" id="cards">
        <div class="card-head">
          <div class="card-body">
            <h5 class="card-title">${intern.getName()}</h5>
            <p class="card-text">${intern.getRole()}</p>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">
            Email:
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${
                intern.email
              }"
              target="_blank"
              >${intern.email}</a
            >
          </li>
          <li class="list-group-item">
            School: ${intern.getSchool()}
          </li>
        </ul>
      </div>`;
  }

  return html;
}

// Put Cards and HTML together to write file
async function createHTML(managers, interns, engineers) {
  const managersHtml = await createManagerHTML(managers);
  const internsHtml = await createInternHTML(interns);
  const engineersHtml = await createEngineerHTML(engineers);

  fs.writeFile(
    "welcometotheteam.html",
    `<!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
       <title>Team Members</title>
       <link
         rel="stylesheet"
         href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
         crossorigin="anonymous"
       />
    
     </head>
     <body>
     <style>
      .card-head {
        color: white;
      }

      .jumbotron {
        background: rgba(255, 255, 255, 0.65);
        position: relative;
        margin: 40px;
      }

      .main-div {
        opacity: 60%;
      }

      .card {
        border: lightgray 2px;
        border-radius: 5%;
      }

      .mgmt-card {
        background-color: #3c3851;
      }

      .eng-card {
        background-color: #b95468;
      }

      .intern-card {
        background-color: #ee815c;
      }

      #cards {
        padding: 10px;
      }

      .row {
        padding: 20px;
        display: flex;
        justify-content: space-around;
      }

      body {
        background-image: url(https://lh3.googleusercontent.com/I-xDnw3knR4FEAO05naTcU8q9_7NXxM4eaxDwEdXa5yfgKBMxE5nf4xlcGK7y2hev1f9wTnYiqGLTWJ619tRKDAu0MhlfE3oB7xx0-OgFMu8iIp40vcs-k4p_1GesYlieOGxHPoNXG9XLZEsM0jUgLpUJFlt16zkmGzTv5JIiFc4TftiD_xDjL3mMNdJw1nCs9zMp0FxtacV3Maj8LXW8MAMmz94_tUzft8ZG4LftiZHnjmTYsAeQENe6anHvC_W-rkh-PbmJp0bquANKNtjlXRhAYVAPek8WT9bBs5xu0q2VQZydodlyck0Bbq0uxHpjpPHNIlapS0xVwZuf4sKv5ubdWYVpRZueTbUladcLFI4-XKmt8hRLktGSRoOD_PcAX0d_EyvYm-H8yQtUsGXErpOh9fs5rM3FS5t7MxHTdpjroHIJoEh_TtuB3D177QuEdEji25xvo0Wn_GPBvksqUTzTOSxvWkIcCf3zllqwaPfUKG7ipAL0RUD5prhmiCBNGE8YmWLW4vG22BbTi3HI5t0MdruRsct5xeRubhPpGuB-q5mEeozD90VcemBg6jGdPi9uoiLWnEyYGvAwZtmUwWr2RERWca2G4uo68_80WjQPdH10z1YxxIYdaEVC_eplm7bizlSHXdOUzbBwHbRULZ7qHkPcY2-redMxV6J35o_Tv-KbUWrdIvQ=w2006-h1128-no);
        background-size: 100%;
      }
    </style>
       <div class="jumbotron">
         <h1 class="display-4">Welcome to my Team</h1>
         <p class="lead">
           Here is a list of team members
         </p>
         <p class="lead"></p>
         <div class="row">
      ${managersHtml} 
      ${engineersHtml}
      ${internsHtml}
      </div>
       </div>
   
       <script
         src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
         integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
         crossorigin="anonymous"
       ></script>
       <script
         src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
         integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
         crossorigin="anonymous"
       ></script>
       <script
         src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
         integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
         crossorigin="anonymous"
       ></script>
     </body>
   </html>
   `,
    function(err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
}

// Prompt if they would like to add another employee

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
      createHTML(managers, interns, engineers);
    }
  } catch (error) {
    throw error;
  }
}

promptUser();
