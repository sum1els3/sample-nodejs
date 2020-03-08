const exp = {};

const sql = require('mssql');
const mapper = require('mybatis-mapper');

const config = require('./../configs/database.configs');
const callbackService = require('./../services/return.callback.services');
const mapperModel = require('./../models/mapper.models');

mapper.createMapper(mapperModel.location);

exp.getUsers = (callback) => { 
	let query = mapper.getStatement('user', 'getUsers', {}, mapperModel.format);

	callbackService.executeQuery(sql, config, query, callback);
	return;
}

exp.getUsersByID = (id, callback) => {
	let parameters = { "id": id };
	let query = mapper.getStatement('user', 'getUsersByID', parameters, mapperModel.format);

	callbackService.executeQuery(sql, config, query, callback);
	return;
}

module.exports = exp;