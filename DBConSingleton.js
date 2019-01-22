
var mysql = require('mysql');
var DBConSingleton = (function() {
    var instance;
    function createInstance() {
        instance = mysql.createConnection({
            host:"localhost",
            username:"root",
            password:"secret"
        })
    }
    return {
        getInstance: function(connString) {
            if (!instance) instance = createInstance();
            return instance;     
        }
    };
})() ;

module.exports = DBConSingleton;
