// function to generate markdown for README
function generateMarkdown(data, steps, licenseName) {
  let stepsMarkdown = ``;
  for (const step of steps) {
    stepsMarkdown += `* ${step}.
    `;
  }

  return `# ${data.title}
  ${data.license}
  
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation

  ${stepsMarkdown}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  * If you have any additional questions, you can:
    * Visit my [GitHub](#https://github.com/${data.github}) page.
    * Email me at ${data.email}.
  
  ## License

  Licensed under the ${licenseName};
`;
}

module.exports = generateMarkdown;
