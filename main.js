// Answer for Exercise 2 //

var randomNumber = (Math.random() * 100)
console.log(randomNumber)

var round = Math.round(randomNumber)
console.log(round)

var ceiling = Math.ceil(randomNumber)
console.log(ceiling)

var floor = Math.floor(randomNumber)
console.log(floor)

console.log('The random number is ' + randomNumber)
console.log('The random number rounded up is ' + Math.round(randomNumber))
console.log('The random number rounded to the next largest integer is ' + Math.ceil(randomNumber))
console.log('The random number rounded to the next smallest integer is ' + Math.floor(randomNumber))

// Answer for Exercise 3 //

var randomInteger = (Math.random() * 20) - 10
console.log(randomInteger)
