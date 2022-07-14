//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//linking the proper files
const generateMarkdown = require('./Develop/utils/generateMarkdown.js')

/*start of the prompted questions, included is the list of questions in
order, what type of question, how to answer, and the message returned
if your answer does not meet the requirements*/
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
        type:'input',
        name:'testing',
        message:'Provide any information needed in order to properly test your project.',
        validate: testingInput => {
            if(testingInput) {
              return true;
            } else {
              console.log('Please give instructions on how to test your project!');
              return false;
            }
          }
       },
       {
        type:'list',
        name:'license',
        message:'Please provide some form of license details.',
        choices: ['Apache_2.0', 'Boost', 'Babel', 'Bower', 'Eclipse','.NET', 'Rails', 'No_License'],
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
// using a promise that rejects the file if theres an error, and gives a message if succesful
const writeToFile = fileContent => {
    return new Promise ((resolve, reject) => {
    fs.writeFile('./Develop/finished.file/Readme.md', fileContent, err =>{
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

// after calling the prompts, writes the content in the new readme file
promptUser()
.then(titleInput => {
    console.log(titleInput);
    return generateMarkdown(titleInput)
})
.then(pageReadMe => {
    return writeToFile(pageReadMe)
})
