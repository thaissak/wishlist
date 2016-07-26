var mongoose = require('mongoose');

var institutions = mongoose.model('institutions');

function InstitutionsController(){
	this.addInst = function(req,res){
		user = new institutions(req.body);
		console.log("In addInst controller", req.body);
		user.save(function(err,result){
			if(err){
				console.log("error inserting new institution", err);
			}
			else{
				console.log("added new institution", result);
				res.json(result);
			}
		})
	}


  
}
module.exports = new InstitutionsController(); 
