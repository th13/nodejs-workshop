/**
* Example file demonstrating how callbacks work in NodeJS.
* @author Trevor Helms
*/

function doSomethingToEach(data, callback) {
	data.forEach(function(item) {
		callback(item);
	});
}



var dogs = [
	'Blood Hound',
	'Golden Retriever',
	'Dachshund',
	'Basset Hound',
	'Shih Tzu'
];

console.log('Calling doSomethingToEach with console.log:');
doSomethingToEach(dogs, console.log);
console.log();

console.log('Calling doSomethingToEach with a custom callback:');
doSomethingToEach(dogs, function(item) {
	if (item.length > 9) {
		console.log(item);
	}
});
