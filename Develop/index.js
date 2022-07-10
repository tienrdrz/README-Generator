// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js')

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'title',
            message:'What is the name of your project?',
            validate: titleInput => {
                if(titleInput) {
                  return true;
                } else {
                  console.log('Please enter your projects name!');
                  return false;
                }
              }
        },
       {
        type:'input',
        name:'description',
        message:'Please give a description of your project. It should include the what, why, and how.',
        validate: descriptionInput => {
            if(descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description of your project! If you need help, go to https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide');
              return false;
            }
          }
       },
       {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project?',
        validate: installationInput => {
            if(installationInput) {
              return true;
            } else {
              console.log('Please explain the steps to install your project!');
              return false;
            }
          }
       },
       {
        type:'input',
        name:'usage',
        message:'Please provide instructions on how to use your project.',
        validate: instructionInput => {
            if(instructionInput) {
              return true;
            } else {
              console.log('Please enter instructions!');
              return false;
            }
          }
       },
       {
        type:'input',
        name:'credits',
        message:'Please give proper credits to collaborators, or anyone involved.',
        validate: instructionInput => {
            if(instructionInput) {
              return true;
            } else {
              console.log('Please enter any form of credits!');
              return false;
            }
          }
       },
       {
        type:'input',
        name:'features',
        message:'List off any feautres you want to highlight.',
        validate: featureInput => {
            if(featureInput) {
              return true;
            } else {
              console.log('Please enter a feature, or give a little more information you want to talk about.');
              return false;
            }
          }
       },
       {
        type:'checkbox',
        name:'license',
        message:'Please provide some form of license details.',
        choices: ['Babel', 'Bower', '.NET', 'Rails', 'No License'],
        validate: licenseInput => {
            if(licenseInput) {
              return true;
            } else {
              console.log('Please enter no license if you do not have one!');
              return false;
            }
          }
       },
       {
        type:'input',
        name:'email',
        message:'For additional information, please give your email.',
        validate: emailInput => {
            if(emailInput) {
              return true;
            } else {
              console.log('Please enter your email.');
              return false;
            }
          }
       },
       {
        type:'input',
        name:'github',
        message:'Please also add your github username.',
        validate: githubInput => {
            if(githubInput) {
              return true;
            } else {
              console.log('Please enter your github account!');
              return false;
            }
          }
       }
    ]); 
};

// writing new readme file

const writeToFile = fileContent => {
    return new Promise ((resolve, reject) => {
    fs.writeFile('./finished.file/Readme.md', fileContent, err =>{
        if (err) {
            reject(err);
            return;
        }

        resolve ({
            ok: true,
            message: 'Open Readme.md to see the finished result!'
        });
    });
});
}

promptUser()
.then(titleInput => {
    console.log(titleInput);
    return generateMarkdown(titleInput)
})
.then(pageReadMe => {
    return writeToFile(pageReadMe)
})











// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();