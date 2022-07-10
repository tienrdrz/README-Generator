
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
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
  
  ## License
  ${data.license}

  ## Additional Info
    - Email: ${data.email}
    - Github: "https://github.com/${data.github} "
`;
}

module.exports = generateMarkdown;