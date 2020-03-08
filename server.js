const express = require('express');
const bodyParser = require('body-parser');

const port = require('./configs/server.configs');
const serverService = require('./services/server.auto.configure.routes.services');

const app = express();

app.use(bodyParser.json());

serverService(app);

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});

module.exports = app;