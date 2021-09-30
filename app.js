const generateHTML = require('./generateHTML')
const fs = require("fs");
const inquirer = require('inquirer');
// const jest = require('jest');
const employee = require('./lib/employee.js');
const intern = require ('./lib/intern.js');
const manager = require ('./lib/manager.js');
const engineer = require ('./lib/engineer.js');
// const { start } = require('repl');
// const { endianness } = require('os');
const emplist = []
const intlist = []
const manalist = []
const englist = []

console.log(generateHTML)



function start(){
    inquirer.prompt({
        type: 'list',
        name: 'position',
        message: 'which of these would you like to change?',
        choices: ['employee', 'engineer', 'intern', 'manager', 'exit'],
    })

    .then(function (input){
        if (input.position === 'employee'){
            employeeq();
 
        if (input.position === 'engineer'){
            engineerq();
        if (input.position === 'intern'){
            internq();
        if (input.position === 'manager'){
            managerq();
        if (input.position === 'exit'){
            finish();
        }
        }
        }
        }
        }
    
    })
}





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










function finish(){
    console.log(emplist)
    console.log(englist)
    console.log(intlist)
    console.log(manalist)
   
    const empInputList = []
    const engInputList = []
    const intInputList = []
    const manaInputList = []
    const allInputList = []


    emplist.forEach (function (input){
        var empInput = generateHTML.generateEmp(input)

        empInputList.push(empInput)
    })
    englist.forEach (function(input){
        var engInput = generateHTML.generateEng(input)

        engInputList.push(engInput)
    })
    intlist.forEach (function (input){
        var intInput = generateHTML.generateInt(input)

        intInputList.push(intInput)
    })
    manalist.forEach (function(input){
        var manaInput = generateHTML.generateMana(input)

        manaInputList.push(manaInput)
    })

var joinedEmpList = empInputList.join('')
var joinedEngList = engInputList.join('')
var joinedIntList = intInputList.join('')
var joinedManaList = manaInputList.join('')

allInputList.push(joinedEmpList, joinedEngList, joinedIntList, joinedManaList)

console.log(allInputList.join(''))

const generateTeamHTML = function (joinedAllInputList){
    var joinedAllInputList = allInputList.join('')
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
    `;

};

console.log(generateTeamHTML)

fs.writeFileSync('./sample/index.hmtl', generateTeamHTML(), 'UTF8')

}


 start()


// // Bonus using writeFileAsync as a promise
// const init = () => {
//   promptUser()
//     .then((input) => writeFileAsync('index.html', generateHTML(input)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();
