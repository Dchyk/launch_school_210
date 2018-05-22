// Write a Function named totalArea that takes an Array of rectangles as an argument. 
// The Function should return the total area covered by all the rectangles.

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);    // 141

// First reduce each subarray by multiplying the first element by the second
// Then reduce that result array by adding each number together

function totalArea(array) {
  return areas(array).reduce( function(a, b) {
    return a + b;
  });
}

function areas(array) {
  return array.map( function(el) {
    return el[0] * el[1];
  });
}

// Only squares 
function totalSquareArea(array) {
  squares = array.filter( function(element) {
    return element[0] === element[1];
  });

  return totalArea(squares);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalSquareArea(rectangles);    // 121 - only squares