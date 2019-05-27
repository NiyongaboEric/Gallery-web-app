const express = require("express");
const router = express.Router();

//register a user
router.post('/register', (req, res) => {
	console.log("registration");
	console.log(req.body);
	res.send("auth");
});

module.exports = router;