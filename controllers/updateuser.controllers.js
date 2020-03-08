const exp = {}

const sql = require('mssql');
const mapper = require('mybatis-mapper');

const config = require('./../configs/database.configs');
const callbackService = require('./../services/return.callback.services');
const mapperModel = require('./../models/mapper.models');

exp.updateUser = (user, callback) => {
	let query = mapper.getStatement('user', 'updateUser', user, mapperModel.format);

	callbackService.executeUpdate(sql, config, query, callback);
	return;
}

module.exports = exp;