const express = require('express');

const userController = require('./../controllers/useraction.controllers');
const routeService = require('./../services/routes.services');

const router = express.Router();

router.put('/activate/:id', (req, res) => {
	let user = {
		"id": parseInt(req.params.id)
	}

	userController.activateUser(user, (error, result) => {
		routeService.routeService(res, error, result);
	});
});

router.put('/deactivate/:id', (req, res) => {
	let user = {
		"id": parseInt(req.params.id)
	}

	userController.deactivateUser(user, (error, result) => {
		routeService.routeService(res, error, result);
	});
});

module.exports = router;