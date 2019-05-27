const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const auth = require("./router/auth.js");
app.use('/auth', auth);
app.use('/', express.static('public'));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`the server is listening on port ${port}`));