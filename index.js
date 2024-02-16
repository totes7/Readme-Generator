const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const licenses = require('./utils/licences')

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Type in the title for your README.md file.",
    name: "title",
  },
  {
    type: "input",
    message: "Type in a description for your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "Type in the steps required for installation. (separate each step with a comma ',')",
    name: "installation",
  },
  {
    type: "input",
    message: "Type in instruction for usage.",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose your license from the list below.",
    choices: licenses,
    name: "license",
  },
  {
    type: "input",
    message: "Type in instruction to contribute to the project.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Type in your GitHub username to be added into the 'Questions' section.",
    name: "q-username",
  },
  {
    type: "input",
    message: "Type in your email address to be added into the 'Questions' section.",
    name: "q-email",
  },
];

inquirer
  .prompt(questions)
  .then(function(response) {
    console.log(response.license);
    let licenseName = '';
    for (const {name, value} of licenses) {
        if (value === response.license) {
            licenseName += name;
        }
    }
    console.log(licenseName);
  })

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
