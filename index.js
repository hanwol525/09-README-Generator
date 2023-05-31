const fs = require('fs');
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown');
const { stdout } = require('process');
const exec = require('child_process').exec;
const ghLicenses = `gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /licenses`
const getLicenses = exec(ghLicenses, (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    var licenseResponse = JSON.parse(stdout);
    var licenseList = questions[4].choices;

    for(let i = 0; i < licenseResponse.length; i++){
        let licenseName = licenseResponse[i].name;
        licenseList.push(licenseName);
    };
  });

const questions = [
    {
        type: 'input',
        message: 'Project title: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation guidelines: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage: ',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'License: ',
        choices: ["No license"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Contribution guidelines: ',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Test instructions: ',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Github Username: ',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Email: ',
        name: 'email'
    }
    ]

inquirer
    .prompt(
        questions
    )
    
    .then((data) => {
        const markdownTemplate = generateMd(data);
        fs.writeFile('test.md', markdownTemplate, (err) =>
        err ? console.log(err) : console.log('Successfully created README!')
        );
        
    })

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
