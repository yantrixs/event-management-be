let mongoose = require('mongoose');

let tokenSchema = new mongoose.Schema({
	token: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
});

tokenSchema.statics.Create = function (user, callback) {

};

module.exports = mongoose.model('Token', tokenSchema);