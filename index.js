// Code your solution in this file.


// this function takes an array of drivers, and returns an array of the drivers names in lowercase.

function lowerCaseDrivers(drivers) {
    const newDrivers = drivers.map(driver => driver.toLowerCase())
    return newDrivers
}

// this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with firstName and lastName attributes.

function nameToAttributes(drivers) {
    const newDrivers = drivers.map(function (driver){
        const split = driver.split(' ')
        return { firstName: `${split[0]}`, lastName: `${split[1]}`}
    })
    return newDrivers
}

// this function takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we are looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN"

function attributesToPhrase(drivers) {
    const newDrivers = drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
    return newDrivers
}

