const { Pool } = require('pg');

let config = {
	user: 'postgres',
	host: '127.0.0.1',
	database: 'gallery',
	password: '12345',
	port: '5432'
};

const pool = new Pool(config);


module.exports = {
	query: (text, params, callback) => {
		return pool.query(text, params, callback);
	},
	end: () => { return pool.end() }
}


// create table
// db.query("CREATE TABLE users(user_id SERIAL PRIMARY KEY, first_name VARCHAR(500) NOT NULL,	last_name VARCHAR(500) NOT NULL,	address VARCHAR(500),	email VARCHAR(500) UNIQUE NOT NULL,	password VARCHAR(100) NOT NULL,	isAdmin Boolean,	Date_time TIMESTAMPTZ)")
// .then(res => console.log(res))
// .catch(error => console.log(error));