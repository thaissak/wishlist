var mongoose = require('mongoose');

var users = mongoose.model('users');

function LoginController(){

	this.userLogin = function(req,res){
		console.log("in login controller");
		users.findOne({email:req.body.email}, function(err,result){
			if(err){
				console.log("error finding user for login", err);
			}
			else if(result.password == req.body.password){
				console.log("user for login founded");
				res.json({password:'passed'});
			}
			else{
				res.json({password:'failed'});
			}
		})
	}
  
}
module.exports = new LoginController(); 
