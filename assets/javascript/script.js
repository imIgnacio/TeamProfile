const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Employee = require("./Employee");

const inquirer = require('inquirer');

const main = document.querySelector("main");


let manager;

function init() {
    console.log('Welcome to Team Manager V1.0.0 \n');

    inquirer
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
        appendToHTML(manager);
    });
}

function appendToHTML(employee){
    // Create all html elements needed
    const divCard = document.createElement('<div>');
    const h2Name = document.createElement('<h2>');
    const divCardInfo = document.createElement('<div>');
    const pID = document.createElement('<p>');
    const pEmail = document.createElement('<p>');
    const employeeInfo = document.createElement('<p>'); // This may vary
    
    // Setting classes to html elements
    divCard.classList.add('card');
    h2Name.classList.add('member-name');
    divCardInfo.classList.add('card-info');
    pID.classList.add('id');
    pEmail.classList.add('email');
    employeeInfo.classList.add('employee-info');

    // Setting text to html elements
    h2Name.textContent = employee.getName();
    pID.textContent = employee.getId();
    pEmail.textContent = employee.getEmail();

    if(employee.getRole() === 'Manager'){
        employeeInfo.textContent = employee.getOfficeNumber();
    }else if(employee.getRole() === 'Engineer'){
        employeeInfo.textContent = employee.getGithub();
    }else if(employee.getRole() === 'Intern'){
        employeeInfo.textContent = employee.getSchool();
    }else{
        employeeInfo.textContent = employee.getRole();
    }

    // Appending to div Card info
    divCardInfo.appendChild(pID);
    divCardInfo.appendChild('<hr>');
    divCardInfo.appendChild(pEmail);
    divCardInfo.appendChild('<hr>');
    divCardInfo.appendChild(employeeInfo);

    // Appending to card div
    divCard.appendChild(h2Name);
    divCard.appendChild(divCardInfo);

    // Appending to main section on HTML
    main.appendChild(divCard);
}

init();
