// Code your solution in this file.

function lowerCaseDrivers(array) {
	const output = array.map(function (driver) {return driver.toLowerCase()})
	return output
}

function nameToAttributes(array) {
	const output = array.map(function (driver) {return Object.assign({}, {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]})})
	return output
}

function attributesToPhrase(array) {
	const output = array.map(function (driver) {return `${driver.name} is from ${driver.hometown}`})
	return output
}
