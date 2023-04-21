// TODO: Include packages needed for this application
const Inquirer = require('inquirer');
const FS = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the Title of your Application?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Describe what your application does.'
    },
    {
        type: 'list',
        name: 'License',
        message: 'Which License will your application require?',
        choices: ['', '', '']
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'Who contributed to the development of this application?'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How can users install this application?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How do users operate the application?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Are there any tests for this application?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub Username?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    Inquirer.prompt(questions)
    .then(res => {
        let markdown = generateMarkdown(res);
        FS.writeFile('./Output/ReadMe.md', markdown, err => {
            if (err) {
                console.log('Error');
            }
        console.log('Your ReadMe File has been Generated.');
        });
    })
    
}

// Function call to initialize app
init();
