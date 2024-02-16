const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// create array of licenses each with a name and the markup code for the icon
const licenses = [
  {
    name: "Apache License 2.0",
    value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  {
    name: "GNU General Public License v3.0",
    value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    name: "MIT License",
    value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  {
    name: 'BSD 2-Clause "Simplified" License',
    value: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  },
  {
    name: 'BSD 3-Clause "New" or "Revised" License',
    value: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  {
    name: "Boost Software License 1.0",
    value: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    value: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
  },
  {
    name: "Eclipse Public License 1.0",
    value: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  },
  {
    name: "GNU Affero General Public License v3.0",
    value: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  },
  {
    name: "GNU General Public License v2.0",
    value: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  },
  {
    name: "GNU Lesser General Public License v3.0",
    value: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  },
  {
    name: "Mozilla Public License 2.0",
    value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
  {
    name: "The Unlicense",
    value: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  },
];

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
];

inquirer
  .prompt(questions)
  .then(function(response) {
    console.log(response);
  })

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
