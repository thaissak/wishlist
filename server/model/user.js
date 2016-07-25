var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usersSchema = new mongoose.Schema({
	name: {type: String, required:true},
	address: {type: String, required:true},
	email: {type: String, required:true},
	phone: {type: Number, required:true},
	image: {type: String},
}, {timestamps: true});

var users = mongoose.model('users', usersSchema);