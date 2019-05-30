const express = require("express");
const router = express.Router();
const db = require('../db/index.js');
const Joi = require('@hapi/joi');
const bcrypt = require("bcrypt");

//register a user
router.post('/register', (request, response, next) => {
//validation
validation = async() => {
	delete request.body.submit;
	delete request.body.checkbox;
	delete request.body.confirm_password;

	//hash password
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(request.body.password, salt);
	request.body.password = hash;



	return new Promise((resolve, reject) => {
		const schema = Joi.object().keys({
			first_name: Joi.string().min(3).max(60).required(),
			last_name: Joi.string().min(3).max(60).required(),
			address: Joi.string().min(3).max(60).required(),
			email: Joi.string().email({minDomailSegments: 2}).required(),
			password: Joi.string().min(3).max(60).required(),		
		})
	//validate
	Joi.validate(request.body, schema, function (err, value) {
		if (err){
			return reject({"error": err.details[0].message});
		}
	});
	//is unique email
	db.query("SELECT COUNT(*) from users where email = $1", [request.body.email], (err, result) =>{
		let count = result.rows[0].count;
		if (parseInt(count) !== 0){
			return reject({"error": "email already taken"});
		}
	})
	// insert into DB
	let values = [request.body.first_name, request.body.last_name, request.body.address, request.body.email, request.body.password, false, new Date()];
	db.query("INSERT INTO users (first_name, last_name, address, email, password, isAdmin, Date_time) VALUES($1,$2,$3,$4,$5,$6,$7)", values, (err, result) =>{
		if (err) {
			return reject({"error": "registration failed"});
		}
		return resolve({"message": "registered successfuly"});
	});
});
}
validation()
.then(res => {
	return response.status(201).json(res);
})
.catch(err => {
	return response.status(400).json(err);
});
});

module.exports = router;