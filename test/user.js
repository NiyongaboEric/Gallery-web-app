const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const should = require('chai').should();
const assert = require('chai').assert;

//const server = require("../server.js");


chai.use(chaiHttp);

const newUser = { 
	"first_name": 'new',
	"last_name": 'user',
	"address": 'kg 543 st',
	"email": 'newuser8@gmail.com',
	"password": "12341",
}

const emailAlreadyTaken = { 
	"first_name": 'Eric',
	"last_name": 'Dasmony',
	"address": 'kg 543 st',
	"email": 'newuser2@gmail.com',
	"password": "12341",
}

const inputValidation = { 
	// "first_name": 'Eric',
	"last_name": 'Damon',
	"address": 'kg 543 st',
	"email": 'eric@gmail.com',
	"password": "12341",
}

describe('Registration form test', () => {
	// it("should register a new user", (done) => {
	// 	chai.request("http://localhost:3000")
	// 	.post('/auth/register')
	// 	.send(newUser)
	// 	.end((req, res) => {
   	// 		expect(res).to.have.status(201);
  	// 	});
	// 	done();
	// });

	it(" should run ",  () => {
		assert.equal("foo", "foo");
	})

	// it("should return error email already taken message", (done) => {
	// 	chai.request("http://localhost:3000")
	// 	.post('/auth/register')
	// 	.send(emailAlreadyTaken)
	// 	.end((req, res) => {
	// 		expect(res.body).to.have.property("error", "email already taken");
	// 	});
	// 	done();
	// });

	// it("should validate first_name ", (done) => {
	// 	chai.request("http://localhost:3000")
	// 	.post('/auth/register')
	// 	.send(inputValidation)
	// 	.end((req, res) => {
	// 		(res.body).should.have.property("error", '"first_name" is required');
	// 	});
	// 	done();
	// });

	// it("should length no to be zero", (done) => {
	// 	chai.request("http://localhost:3000")
	// 	.post('/auth/register')
	// 	.send(inputValidation)
	// 	.end((req, res) => {
	// 		(inputValidation.last_name).should.have.lengthOf(5);
	// 	});
	// 	done();
	// });
});