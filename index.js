const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const inquirer = require('inquirer');

//const main = document.querySelector("main");

let html = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="./assets/css/reset.css">
                <link rel="stylesheet" href="./assets/css/style.css">
                <title>Team Profile</title>
            </head>
                <body>
                    <header>
                        <h1>My Team Manager</h1>
                    </header>

                    <main>
                        <div class="card">
                            <h2 class="member-name">Member Name</h2>
                            <div class="card-info">
                                <p class="id">ID: </p>
                                <hr>
                                <p class="email">Email: </p>
                                <hr>
                                <p class="employee-info">Engineer</p>
                            </div>
                        </div>
                    </main>

                    <script src="./assets/javascript/script.js"></script>
                </body>
            </html>`

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
        //appendToHTML(manager);
    });
}
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

        switch (data.choice) {
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

function renderHTML() {
    console.log(membersArray);
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
