const exp = {}

exp.location = ['./mappers/user.mapper.xml'];

exp.format = {
	"language": "sql",
	"indent": " "
}

exp.notFoundOnDatabase = {
	"code": 404,
	"message": "Data not found on database."
}

exp.undefinedError = {
	"code": 500,
	"message": "An error has occurred."
}

exp.inserted = {
	"code": 200,
	"message": "Data has been inserted."
}

exp.updated = {
	"code": 200,
	"message": "Data has been updated."
}

exp.deleted = {
	"code": 200,
	"message": "Data has been deleted."
}

module.exports = exp;