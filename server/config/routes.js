module.exports = function(app){
	// ADD THE PATH FOR YOUR CONTROLLER HERE
	var users = require('../controller/users.js');
	var inst = require('../controller/institutions.js');
	var logins = require('../controller/logins.js');

    app.post('/login/user', function(req,res){
    	logins.userLogin(req,res);
    });

    app.post('/login/institution', function(req,res){
    	logins.instLogin(req,res);
    });

    app.post('/register/user', function(req,res){
    	users.addUser(req,res);
    });

    app.post('/register/institution', function(req,res){
    	inst.addInst(req,res);
    });


};