var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	bids: [{name: {type: String}, bid: {type: String, required: true}}],
	status: {type: String, required: true},
	ended_by: {type: String}
}, {timestamps: true})

mongoose.model('Product', ProductSchema)