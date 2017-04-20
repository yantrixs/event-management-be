let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let eventSchema = new Schema({
	_id: {
		type: String,
		required: true
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
		require: true
	},
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	create: {
		type: Date,
		default: Date.now
	},
	description: {
		type: String,
		default: ""
	},
	venue: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Event', eventSchema);