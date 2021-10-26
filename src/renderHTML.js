const fs = require('fs');

let cards;

let htmlWritten = (cards) =>  `<!DOCTYPE html>
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
                        ${cards}
                    </main>

                    <script src="./assets/javascript/script.js"></script>
                </body>
            </html>`;

let manager;
let engineerArray;
let internArray;
let employeesFiltered = [];
let cardsArray = [];

function appendToHTML(array) {
    cards = array.join('');
    fs.writeFile('index.html', htmlWritten);
}

// Filter and organise employees
function filterEmployees(array) {
    // Filter array to have Employees filtered
    manager = array[0];
    engineerArray = array.filter((value) => {
        return value.getRole() === 'Engineer';
    });
    internArray = array.filter((value) => {
        return value.getRole() === 'Intern';
    })

    employeesFiltered.push(manager);
    Array.prototype.push.apply(employeesFiltered, engineerArray);
    Array.prototype.push.apply(employeesFiltered, internArray);

    createCards(employeesFiltered);
}

// Create cards for html file from Employess already filtered
function createCards(array) {
    array.forEach((data, index) => {
        if(data.getRole() === 'Manager'){

            let cardManager = `<div class="card">
                <h2 class="member-name">${data.getName()}</h2>
                <div class="card-info">
                    <p class="id">ID: ${data.getId()}</p>
                    <hr>
                    <p class="email">Email: ${data.getEmail()}</p>
                    <hr>
                    <p class="employee-info">Office Number: ${data.getOfficeNumber()}</p>
                </div>
            </div>`
            cardsArray.push(cardManager);
        }else if(data.getRole() === 'Engineer'){

            let cardEngineer = `<div class="card">
                    <h2 class="member-name">${data.getName()}</h2>
                    <div class="card-info">
                        <p class="id">ID: ${data.getId()}</p>
                        <hr>
                        <p class="email">Email: ${data.getEmail()}</p>
                        <hr>
                        <p class="employee-info">Github: ${data.getGithub()}</p>
                    </div>
                </div>`
                cardsArray.push(cardEngineer);
        }else{

            let cardIntern = `<div class="card">
                    <h2 class="member-name">${data.getName()}</h2>
                    <div class="card-info">
                        <p class="id">ID: ${data.getId()}</p>
                        <hr>
                        <p class="email">Email: ${data.getEmail()}</p>
                        <hr>
                        <p class="employee-info">School: ${data.getSchool()}</p>
                    </div>
                </div>`
                cardsArray.push(cardIntern);
        }
    })
    appendToHTML(cardsArray);
}


module.exports = filterEmployees;