const express = require("express");
const router = express.Router();
const db = require('../db/index.js');
const Joi = require('@hapi/joi');
const bcrypt = require("bcrypt");


//get all user
router.get('/register', (request, response) => {
		db.query("SELECT * from users ", (err, result) =>{
		if (err){

			//return response.status(400).json({"error": "no information to display"});
			console.log(err, result);
			return response.status(400).json({request, response});
		}
		return response.status(200).json(result.rows);
	})
})

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
			// if (err) {
			// 	return reject({"error": "registration failed, please try again"});
			// }
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

//get specific user
router.get('/register/:id', (request, response, next) => {
	id = parseInt(request.params.id);	
	db.query("SELECT * from users where user_id = $1", [id], (err, result) =>{
		if (err){
			return response.status(404).json({"error": "user does not exist"});
		}
		return response.status(200).json(result.rows);
	});
})

//put a user
router.put('/register/:id', (request, response, next) => {
	id = parseInt(request.params.id);
		let update = [request.body.first_name, request.body.last_name, request.body.address,id];
		db.query("UPDATE users SET first_name=$1, last_name=$2, address=$3 where user_id = $4", update, (err, result) => {
			if (err){
				return response.status(404).json({"error": "user did not changed"});
			}
			return response.status(200).json({"success": "updated successfuly"});
		});
})

//delete a user
router.delete('/register/:id', (request, response, next) => {
	id = parseInt(request.params.id);	
	db.query("delete from users where user_id = $1", [id], (err, result) =>{
		if (err){
			return response.status(400).json({"error": "user does not exist"});
		}
		return response.status(200).json({"success": "deleted successfuly"});
	});	
})

module.exports = router;