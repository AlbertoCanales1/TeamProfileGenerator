const generateHTML = require('generateHTML')
const fs = require("fs");
const inquirer = require('inquirer');
const jest = require('jest');
const employee = require('./lib/employee.js');
const intern = require ('./lib/intern.js');
const manager = require ('./lib/manager.js');
const engineer = require ('./lib/engineer.js');
const { start } = require('repl');
const emplist = []
const intlist = []
const manalist = []
const englist = []

console.log(htmlgenerator)





function employeeq(){
     inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the employees name?',
        },
        {
            type: 'input ',
            name: 'id',
            message: 'what is the employees id?',
        },{
            type: 'input',
            name: 'email',
            message: 'what is the employees id?',
        },
    ])
    .then(function(input){
        const emp = new employee(input.name, input.id, input.email); 

        emplist.push(emp)
        start()
    });
}

function engineerq(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the engineers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is the engineers id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the engineers email?'
        },
    ])

    .then(function(input){
        const eng = new engineer(input.name, input.id, input.email);

        englist.push(eng)
        start()
    })
}

function managerq() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is the managers id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the managers email?'
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'what is the managers office number?'
        }
    ])

    .then(function(input){
        const mana = new manager(input.name, input.id, input.email, input.officenumber);

        manalist.push(mana)
        start()
    })
}

function internq(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is the interns id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the interns email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'what is the interns school?'
        }
    ])

    .then(function(input){
        const int = new intern(input.name, input.id, input.email, input.school);
        
        intlist.push(int)
        start()
    })
}

function writeToFile(input) {
    fs.writeFile(input, (err) => {
      if (err) throw err;
      console.log("The file has been created");
    })

}




// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((input) => writeFileAsync('index.html', generateHTML(input)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
