/**
* Example NodeJS program demonstrating the singleton nature of Node modules
* @author Trevor Helms
*/

var dogs1 = require('./dogs');
var dogs2 = require('./dogs');

console.log(dogs1.dog);

// Attempt to set dogs2's dog to something else
dogs2.dog = 'Blood Hound';

// Whoops, we overwrote dogs1!
console.log(dogs1.dog);
