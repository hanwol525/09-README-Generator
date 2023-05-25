const fs = require('fs');
const inquirer = require('inquirer');

fs.appendFile('test.txt', `${process.argv[2]}\n`, (err) =>
err ? console.error(err) : console.log("fuck yea boi"));

inquirer
    .prompt([
    {
        type: 'input',
        message: 'Project title: ',
        name: 'title'
    },
    ])

    // need .then