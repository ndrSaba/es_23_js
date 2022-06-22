const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

Object.keys(person).forEach(key => {
  let value = person[key];
  console.log(`${key}: ${value}`);
})

// Print values of person using Object.keys