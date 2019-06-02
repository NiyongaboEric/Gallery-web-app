const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Routes
const auth = require("./router/auth.js");
app.use('/auth', auth);

//static files
app.use('/', express.static('public'));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`the server is listening on port ${port}`));

//swagger
const swaggerDocument = require('./db/swagger.json');
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));