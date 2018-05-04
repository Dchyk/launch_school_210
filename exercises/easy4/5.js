function interleave(array1, array2) {
  var interleaved = [];
  var i; 

  for (i = 0; i < array1.length; i += 1) {
    interleaved.push(array1[i], array2[i]);
  }

  return interleaved;
}