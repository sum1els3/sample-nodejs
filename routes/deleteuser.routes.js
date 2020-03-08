const express = require('express');

const userController = require('./../controllers/deleteuser.controllers');
const routeService = require('./../services/routes.services');

const router = express.Router();

router.delete('/:id', (req, res) => {
	let user = {
		"id": parseInt(req.params.id)
	}

	userController.deleteUser(user, (error, result) => {
		routeService.routeService(res, error, result);
	});
});

module.exports = router;