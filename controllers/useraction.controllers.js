const exp = {}

const sql = require('mssql');
const mapper = require('mybatis-mapper');

const config = require('./../configs/database.configs');
const callbackService = require('./../services/return.callback.services');
const mapperModel = require('./../models/mapper.models');

exp.activateUser = (user, callback) => {
	let query = mapper.getStatement('user', 'activateUser', user, mapperModel.format);

	callbackService.executeUpdate(sql, config, query, callback);
	return;
}

exp.deactivateUser = (user, callback) => {
	let query = mapper.getStatement('user', 'deactivateUser', user, mapperModel.format);

	callbackService.executeUpdate(sql, config, query, callback);
	return;
}

module.exports = exp;