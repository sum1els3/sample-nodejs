const exp = {}

const sql = require('mssql');
const mapper = require('mybatis-mapper');

const config = require('./../configs/database.configs');
const callbackService = require('./../services/return.callback.services');
const mapperModel = require('./../models/mapper.models');

exp.deleteUser = (user, callback) => {
	let query = mapper.getStatement('user', 'deleteUser', user, mapperModel.format);

	callbackService.executeDelete(sql, config, query, callback);
	return;
}

module.exports = exp;