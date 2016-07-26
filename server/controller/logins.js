var mongoose = require('mongoose');

var users = mongoose.model('users');

var inst = mongoose.model('institutions');

function LoginController(){

	this.userLogin = function(req,res){
		console.log("in login controller");
		users.findOne({email:req.body.email}, function(err,result){
			console.log("from factory", req.body, "from db", result);
			if(err){
				console.log("error finding user for login", err);
			}
			else if(result){
				if(result.password == req.body.password){
				console.log("user for login founded");
				res.json({password:'passed'});
				}
			}
			else{
				console.log("password failed");
				res.json({password:'failed'});
			}
		})
	},

	this.instLogin = function(req,res){
		console.log("in login inst controller");
		inst.findOne({name:req.body.name}, function(err,result){
			console.log("from factory", req.body, "from db", result);
			if(err){
				console.log("error finding inst for login", err);
			}
			else if(result){
				if(result.password == req.body.password){
				console.log("inst for login founded");
				res.json({password:'passed'});
				}
			}
			else{
				console.log("password failed");
				res.json({password:'failed'});
			}
		})
	}

  
}
module.exports = new LoginController(); 
