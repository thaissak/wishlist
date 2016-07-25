module.exports = function(app){
	// ADD THE PATH FOR YOUR CONTROLLER HERE
	var name = require('../controller/file_name.js');

	app.get('/', function(req,res){
		name.method_name(req,res);
	})

    app.post('/', function(req,res){
    	name.method_name(req,res);
    })


}