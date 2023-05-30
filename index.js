const fs = require('fs');
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown');
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
        type: 'input',
        message: 'License: ',
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
        console.log(data)
        const markdownTemplate = generateMd(data);
        fs.writeFile('test.md', markdownTemplate, (err) =>
        err ? console.log(err) : console.log('Successfully created README!')
        );
    })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
