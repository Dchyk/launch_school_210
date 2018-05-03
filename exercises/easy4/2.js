function union(arr1, arr2) {
  var union = [];
  var i;

  for (i = 0; i < arr1.length; i += 1) {
    if (union.indexOf(arr1[i]) === -1) {
      union.push(arr1[i]);
    }
    if (union.indexOf(arr2[i]) === -1) {
      union.push(arr2[i]);
    }
  }

  return union;
}

function unionTwo(arr1, arr2) {
  return removeDuplicates(arr1, arr2).concat(arr2);
}

function removeDuplicates(arr1, arr2) {
  var nonDuplicates = arr1.filter( function(element) {
    return arr2.indexOf(element) === -1;
  });

  return nonDuplicates;
}