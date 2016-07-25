var mongoose = require('mongoose');

var wishlistsSchema = new mongoose.Schema({
	_institution: {type: Schema.Types.ObjectId, ref: 'institutions'},
	name: {type: String, required:true},
	description: {type: String, required:true},
	type: {type: String, required:true},
	item:{
		id: String,
		//this is Amazon ID
		name: String,
		quantity: Number,
		description: String,
	}
}, {timestamps: true});

var wishlists = mongoose.model('wishlists', wishlistsSchema);