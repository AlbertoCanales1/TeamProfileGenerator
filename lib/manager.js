const employee = require ("./employee");

class manager extends employee {
    constructor(name, id, email, officenumber){
        super(name, id, email);
        this.officenumber = officenumber;
    }

    getofficenumber(){
        return this.officenumber;
    }

    getrole(){
        return "manager";
    }
}
 
module.exports = manager;