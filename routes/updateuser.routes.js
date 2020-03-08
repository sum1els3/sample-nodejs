const express = require('express');

const userController = require('./../controllers/updateuser.controllers');
const routeService = require('./../services/routes.services');

const router = express.Router();

router.put('/:id', (req, res) => {
	let user = {
		"id": parseInt(req.params.id),
		"username": req.body.username,
		"password": req.body.password,
		"active": req.body.active
	}

	userController.updateUser(user, (error, result) => {
		routeService.routeService(res, error, result);
	})
});

module.exports = router;