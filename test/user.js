const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const should = require('chai').should();

chai.use(chaiHttp);

const userTest = { 
	// "first_name": 'Eric',
	"last_name": 'Dasmony',
	"address": 'kg 543 st',
	"email": 'test@gmail.com',
	"password": "12341",
}

describe('Registration form test', () => {
	/*it("should register a new user", (done) => {
		chai.request("http://localhost:3000")
		.post('/auth/register')
		.send(userTest)
		.end((req, res) => {
			console.log(res.body);
   expect(res).to.have.status(201);
  })
		done();
	});*/

	/*it("should return successfuly message", (done) => {
		chai.request("http://localhost:3000")
		.post('/auth/register')
		.send(userTest)
		.end((req, res) => {
			console.log(res.body);
   expect(res.body).to.have.property("message", "registered successfuly");
 	});
 	done();
 });*/

/*it("should return error email already taken message", (done) => {
	chai.request("http://localhost:3000")
	.post('/auth/register')
	.send(userTest)
	.end((req, res) => {
		console.log(res.body);
		expect(res.body).to.have.property("error", "email already taken");
	});
	done();
});*/

/*it("should validate and return input status code", (done) => {
	chai.request("http://localhost:3000")
	.post('/auth/register')
	.send(userTest)
	.end((req, res) => {
		console.log(res.body);
		(res).should.have.status(400);
	});
	done();
});*/

it("should validate first_name ", (done) => {
	chai.request("http://localhost:3000")
	.post('/auth/register')
	.send(userTest)
	.end((req, res) => {
		console.log(res.body);
		(res.body).should.have.property("error", '"first_name" is required');
	});
	done();
});

it("should length to be greater than zero", (done) => {
	chai.request("http://localhost:3000")
	.post('/auth/register')
	.send(userTest)
	.end((req, res) => {
		console.log(res.body);
		(userTest.last_name).should.have.lengthOf(5);
	});
	done();
});
});