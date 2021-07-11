const employee = require ("./employee");

class engineer extends employee {
    constructor(name, id, email, github ){
       super (name, id, email);
       this.github = github;
    }

/// Get data
    
getgithub() {
    return this.github
}

getrole(){
    return 'engineer';
}
   

}

//Export
module.exports = engineer;