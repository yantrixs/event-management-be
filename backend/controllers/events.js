'use strict';
let Events = require('../models/event-model');
let console = require('console');
let jsonWebToken = require('jsonwebtoken');
let moment = require('moment');
function handleError(res, err) {
	return res.send(500, err);
}

module.exports = {
	createEvent: function (req, res) {
		let eventObj = req.body;
		eventObj._id = moment().utc().valueOf();
		eventObj.date = new Date(req.body.date.momentObj);
		let token = req.headers['authorization'].replace(/^JWT\s/, '');
		let decoded;
		//console.log("Token is  ::  ", token);
		try {
			decoded = jsonWebToken.verify(token, 'superSecret');
			//console.log(decoded);
		}
		catch (err) {
			console.log("Token Error Is:::   ", err);
		}
		eventObj.user = decoded.id;
		let eventModel = new Events(eventObj);
		eventModel.save(eventObj, (err, data) => {
			if (err) {
				console.log("Error is ");
				res.send(500, "Event creation failed");
			}
			res.json({status: 200, data: data, message: 'Event created successfully'});
			console.log("Res is ::  ", data);
		})
	},

	getEvents: function (req, res) {
		//console.log(" in Event get Handler :::  ", req.headers.authorization);
		Events.find({}).sort({
			create: -1
		}).exec(function (err, data) {
			if (err) {
				return handleError(res, err);
			}
			if (!data) {
				console.log("Events are Getting 404");
				return res.send(404);
			}
			return res.send(data);
		})
	},
};