const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const licenses = require("./utils/licences");

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
    type: "input",
    message: "Type in instruction to contribute to the project.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Describe the testing done on this project.",
    name: "tests",
  },
  {
    type: "input",
    message:
      "Type in your GitHub username to be added into the 'Questions' section.",
    name: "github",
  },
  {
    type: "input",
    message:
      "Type in your email address to be added into the 'Questions' section.",
    name: "email",
  },
  {
    type: "list",
    message: "Choose your license from the list below.",
    choices: licenses,
    name: "license",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    let licenseName = "";
    for (const { name, value } of licenses) {
      if (value === response.license) {
        licenseName += name;
      }
    }

    let steps = response.installation.split(",");

    let newFile = generateMarkdown(response, steps, licenseName);

    writeToFile('README.md', newFile);
  });
}

// function call to initialize program
init();
