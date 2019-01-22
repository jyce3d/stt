var singleton = require ("./DBConSingleton.js");
var build = require("./StudyBuilder");
var dbConn = singleton.getInstance();
var studyBuilder = StudyBuilder(dbConn, {
    studyId : "14"
});
var study = StudyBuilder.getStudy( {
    includeCohorts:true,
    includePatients:false
});

var cohorts = StudyBuilder.getCohorts({
    includePatients:true
});
