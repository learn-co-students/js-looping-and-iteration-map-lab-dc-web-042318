// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  //console.log(drivers)
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
  function nameToObject(driver) {
    nameArray = driver.split(" ")
    return {
      firstName: nameArray[0],
      lastName: nameArray[1]
    };
  }
  return drivers.map(driver => nameToObject(driver));
}

function attributesToPhrase(drivers) {
  //console.log(drivers);
  function nameTownPhrase(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  }
  return drivers.map(driver => nameTownPhrase(driver));
}
