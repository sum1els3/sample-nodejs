const express = require('express');

const userController = require('./../controllers/getuser.controllers');
const routesServices = require('./../services/routes.services');

const router = express.Router();

router.get('/', (req, res) => {
	userController.getUsers((error, result) => {
		routesServices.routeService(res, error, result);
	});
});

router.get('/:id', (req, res) => {
	userController.getUsersByID(parseInt(req.params.id), (error, result) => {
		routesServices.routeService(res, error, result);
	});
});

module.exports = router;
