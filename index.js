function lowerCaseDrivers(driver) {
  return driver.map(word => word.toLowerCase());
}

function nameToAttributes(driver) {
  const newDriver = driver.map(name =>
    Object.assign({
      firstName: name.split(' ')[0],
      lastName: name.split(' ')[1]
    })
  );
  return newDriver;
}

function attributesToPhrase(array) {
  return array.map(driver => `${driver.name} is from ${driver.hometown}`);
}
