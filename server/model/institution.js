var mongoose = require('mongoose');

var institutionsSchema = new mongoose.Schema({
	name: {type: String, required:true},
	address: {type: String, required:true},
	email: {type: String, required:true},
	password: {type: String, required: true},
	phone: {type: Number, required:true},
	description: {type: String, required:true},
	type: {type: String, required:true},
	image: {type: String},
	responsible:{
		name: String,
		email: String,
		phone: Number,
	}
}, {timestamps: true});

var intitutions = mongoose.model('institutions', institutionsSchema);