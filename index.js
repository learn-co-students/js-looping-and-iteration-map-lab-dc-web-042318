function lowerCaseDrivers (drivers) {
  const result = drivers.map(function (name) {
    return name.toLowerCase()
  })
  return result
}

function attributesToPhrase (drivers) {
  const result = drivers.map(function (account) {
    return `${account['name']} is from ${account['hometown']}`
  })
  return result
}

// const drivers = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];

function nameToAttributes (drivers) {
  const result = drivers.map(function (name) {
    return { firstName: name.split(' ')[0], lastName: name.split(' ')[1] }
  })
  return result
}
