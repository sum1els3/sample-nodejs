const exp = {}

const sql = require('mssql');
const mapper = require('mybatis-mapper');

const config = require('./../configs/database.configs');
const callbackService = require('./../services/return.callback.services');
const mapperModel = require('./../models/mapper.models');

exp.addUser = (user, callback) => {
	let query = mapper.getStatement('user', 'addUser', user, mapperModel.format);

	callbackService.executeInsert(sql, config, query, callback);
	return;
}

module.exports = exp;