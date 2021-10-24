const Manager = require("./Manager");
const Employee = require("./Employee");
const inquirer = require('inquirer');

inquirer
.prompt([{
    type: 'input',
    message: '2+2?',
    name: 'suma',
}])
.then((data) => {
    console.log(data.suma);
});