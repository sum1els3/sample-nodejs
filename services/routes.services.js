const exp = {}

const model = require('./../models/mapper.models');

const nullModel = model.notFoundOnDatabase;

exp.routeService = (res, err, result) => {
	if(err){
		showError(res, err);
	}
	else{
		checkResultIfNull(res, result);
	}
	return;
}

showError = (res, err) => {
	console.log(err);
	res.end(JSON.stringify(err));
	return;
}

checkResultIfNull = (res, result) => {
	if(result){
		if(result.length === 0) {
			console.log(nullModel);
			res.end(JSON.stringify(nullModel));
		}
		else{
			console.log(result);
			res.end(JSON.stringify(result));
		}
		return;
	}
	else{
		console.log(result);
		res.end(JSON.stringify(result));
	}
	return;
}

module.exports = exp;