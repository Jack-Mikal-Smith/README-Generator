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
        name: 'license',
        message: 'Which License will your application require?',
        choices: [
            'None',
            'Apache_2.0',
            'GNU_General_Public_v3.0',
            'MIT',
            'BDS_2_Clause',
            'BDS_3_Clause',
            'Boost_Software_1.0',
            'Creative_Commons_Zero_v1.0',
            'Eclipse_Public_v2.0',
            'GNU_Alfero_General_Public_v3.0',
            'GNU_General_Public_v2.0',
            'GNU_Lesser_General_Public_v2.1',
            'Mozilla_Public_v2.0',
            'The_Unlicense'
        ]
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
