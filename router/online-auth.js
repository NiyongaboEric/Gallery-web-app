const express = require("express");
const router = express.Router();
const db = require('../db/index.js');
const Joi = require('@hapi/joi');
const bcrypt = require("bcrypt");


route.get('/register', (req, res) => {
	res.send("get registered");
})

module.exports = router;