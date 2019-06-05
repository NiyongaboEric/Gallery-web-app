const express = require("express");
const app = express();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

//swagger
console.log('swagger touched');
const swaggerDocument = require('../db/swagger.json');
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

module.exports = app;