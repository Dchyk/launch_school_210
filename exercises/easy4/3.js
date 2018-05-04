// Splitting an array 

// First get the length of the array
// If length % is !== 1, firstHalf = length / 2 + 1; else firstHalf = length / 2

function halvsies(arr) {
  var halves = [];
  var middleIndex;

  if (arr.length % 2 === 0) {
    middleIndex = (arr.length / 2);
  } else {
    middleIndex = (Math.ceil(arr.length / 2))
  }

  halves.push(arr.slice(0, middleIndex));
  halves.push(arr.slice(middleIndex));

  return halves;
}