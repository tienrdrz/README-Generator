
/*Created a function to generate markdown for README,
using the data collected from the other file, it updates each
section with all the data given from the user*/
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [Testing](#testing)
- [License](#license)
- [Additional Info](#email)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Features
  ${data.features}

  ## Testing
  ${data.testing}
  
  ## License
  ${data.license}
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

  ## Additional Info
    - Email: ${data.email}
    - Github: "https://github.com/${data.github}"
`;
}
//included under license is a link that, depending on the license you choose, will display a badge

// exporting the file so it can be imported
module.exports = generateMarkdown;

