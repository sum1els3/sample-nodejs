const express = require('express');

const userController = require('./../controllers/adduser.controllers');
const routeService = require('./../services/routes.services');

const router = express.Router();

router.post('/', (req, res) => {
	let user = {
		"username": req.body.username,
		"password": req.body.password
	}

	userController.addUser(user, (error, result) => {
		routeService.routeService(res, error, result);
	});
});

module.exports = router;