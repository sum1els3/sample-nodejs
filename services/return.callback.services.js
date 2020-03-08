const exp = {}

const mapperModel = require('./../models/mapper.models');

const insertMessage = mapperModel.inserted;
const updateMessage = mapperModel.updated;
const deleteMessage = mapperModel.deleted;

exp.executeQuery = (sql, config, query, callback) => {
	sql.connect(config, (connectionError) => {
		new sql.Request().query(query, (err, result) => {
			returnCallback(connectionError, err, result, callback);
		});
	});
	return;
}sdsf

exp.executeInsert = (sql, config, query, callback) => {
	sql.connect(config, (connectionError) => {
		new sql.Request().query(query, (err, result) => {
			returnCallbackMessage(connectionError, err, insertMessage, callback);
		})
	});
	return;
}

exp.executeUpdate = (sql, config, query, callback) => {
	sql.connect(config, (connectionError) => {
		new sql.Request().query(query, (err, result) => {
			returnCallbackMessage(connectionError, err, updateMessage, callback);
		})
	});
	return;
}

exp.executeDelete = (sql, config, query, callback) => {
	sql.connect(config, (connectionError) => {
		new sql.Request().query(query, (err, result) => {
			returnCallbackMessage(connectionError, err, deleteMessage, callback);
		})
	});
	return;
}

returnCallback = (connectionError, error, result, callback) => {
	let callbackError = null;
	let callbackData = null;

	if(connectionError){
		callbackError = connectionError;
	}
	else if(error){
		callbackError = error;
	}
	else{
		callbackData = result;
	}
	callback(callbackError, callbackData);
	return;
}

returnCallbackMessage = (connectionError, error, message, callback) => {
	let callbackError = null;
	let callbackSuccess = null;

	if(connectionError){
		callbackError = connectionError;
	}
	else if(error){
		callbackError = error;
	}
	else{
		callbackSuccess = message;
	}
	callback(callbackError, callbackSuccess);
	return;
}

module.exports = exp;