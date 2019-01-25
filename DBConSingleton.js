
var mysql = require('mysql');
var DBConSingleton = (function() {
    var instance;
    function createInstance() {
        instance = mysql.createConnection({
            host:"localhost:3306",
            username:"root",
            password:"123niab",
            database: "stt_db"
        })
    }
    return {
        getInstance: function() {
            if (!instance) instance = createInstance();
            return instance;     
        }
    };
})() ;

module.exports = DBConSingleton;
