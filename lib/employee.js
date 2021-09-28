class employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

/// Get data
    
    getname() {
        return this.name;
    }
    
    getid() {
        return this.id;
    }

    getemail(){
        return this.email;
    }
    
    getrole(){
        return 'employee';
    }
}

//Export
module.exports = employee;