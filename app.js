const inquirer = require('inquirer');
const jest = require('jest');
const employee = require('employee');
const intern = require ('intern');
const manager = require ('manager');
const engineer = require ('engineer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: '',
            name: '',
            message: '',
        },
        {
            type: '',
            name: '',
            message: '',
        },{
            type: '',
            name: '',
            message: '',
        },{
            type: '',
            name: '',
            message: '',
        },{
            type: '',
            name: '',
            message: '',
        },{
            type: '',
            name: '',
            message: '',
        },{
            type: '',
            name: '',
            message: '',
        },
    ])
}