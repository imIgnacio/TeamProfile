const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const render = require('./src/renderHTML');

const inquirer = require('inquirer');
const fs = require('fs');

let manager;
let userChoice;
let membersArray = [];

async function init() {
    console.log('Welcome to Team Manager V1.0.0 \n');

    await inquirer
    .prompt([{
        type: 'input',
        message: 'What is manager\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is manager\'s ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is manager\'s email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is manager\'s office number?',
        name: 'office',
    }])
    .then((data) => {
        manager = new Manager(data.name, data.id, data.email, data.office);
        membersArray.push(manager);
        addTeamMembers();
    });
}

// Function to add engineers, interns or finish the app
function addTeamMembers() {
    inquirer
    .prompt({
        type: 'list',
        message: 'What would you like to do next?',
        name:'choice',
        choices: [
            'Add an Engineer',
            'Add an Intern',
            'Finish Application'
        ]
    })
    .then((data) => {
        switch(data.choice) {
            case 'Add an Engineer':
                addEngineer();
                break;
            case 'Add an Intern':
                addIntern();
                break;
            default:
                renderHTML();
                break;
        }
    })
}

// Get HTML file ready to be written using fs
function renderHTML() {
    const htmlCreated =  render(membersArray);
}

function addEngineer(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is engineer\'s name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the ID?',
            name: 'id'
        },
        {
            tpye: 'input',
            message: 'What is engineer\'s email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is engineer\'s Github?',
            name: 'github'
        }
    ])
    .then((data) => {
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        membersArray.push(engineer);
        addTeamMembers();
    })
}

function addIntern(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is intern\'s name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the ID?',
            name: 'id'
        },
        {
            tpye: 'input',
            message: 'What is intern\'s email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is intern\'s school?',
            name: 'school'
        }
    ])
    .then((data) => {
        let intern = new Intern(data.name, data.id, data.email, data.school);
        membersArray.push(intern);
        addTeamMembers();
    })
}

// Program starts here
init();