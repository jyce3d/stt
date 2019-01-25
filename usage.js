var singleton = require ("./DBConSingleton.js");
var UserBuilder = require("./UserBuilder.js");
//import {Role} from './models/Role.js';
//var Role = require("./models/Role.js");
//var build = require("./StudyBuilder");
var mysql = require('mysql');
var dbConn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123niab",
    database: "stt_db",
    port: 3306
})
//var dbConn = singleton.getInstance();
dbConn.connect(function(err) {
    if (err) throw err;
});

class Role {

    constructor(id, roleName) {
     this.id = id;
     this.roleName= roleName;
    }
    roleName() {
        return this.roleName;
    }
    id() {
        return this.id;
    }
}

var role =new Role(1, "ADMIN"); 
console.log(role.roleName);

//var ub = UserBuilder();
//var role = UserBuilder.createRole(dbConn, { rolename :"ADMIN"});
/*dbConn.query("SELECT * FROM roles where rolename like ?", ["ADMIN"], function(err, rs,nextStep) {
    if (err) throw err;
   // var role= new Role(rs.id, rs.rolename);
    //console.log(role.roleName());
    nextStep(rs);
} 
);*/



/*var studyBuilder = StudyBuilder(dbConn, {
    studyId : "14"
});
var study = StudyBuilder.getStudy( {
    includeCohorts:true,
    includePatients:false
});

var cohorts = StudyBuilder.getCohorts({
    includePatients:true
});*/
