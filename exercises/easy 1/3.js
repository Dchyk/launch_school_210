var length = parseInt(prompt('Enter the length of the room in meters:'), 10);
var width = parseInt(prompt('Enter the width of the room in meters'), 10);

var squareMeters = length * width;
var squareFeet = (length * 3.28084) * (width * 3.28084);

console.log('The are of the room is', squareMeters, 'square meters (', squareFeet, 'square feet).' );