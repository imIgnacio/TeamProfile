const Employee = require('./Employee');

class Intern {
    constructor(name, id, email, school){
        
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;