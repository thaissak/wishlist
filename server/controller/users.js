var mongoose = require('mongoose');

var users = mongoose.model('users');

function UsersController(){
	this.addUser = function(req,res){
		user = new users(req.body);
		console.log("In addUser controller", req.body);
		user.save(function(err,result){
			if(err){
				console.log("error inserting new user", err);
			}
			else{
				console.log("added new user", result);
				res.json(result);
			}
		})
	}

  
}
module.exports = new UsersController(); 
