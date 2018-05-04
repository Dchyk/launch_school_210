function multiplyList(array1, array2) {
  var result = [];
  var i;

  for (var i = 0; i < array1.length; i += 1) {
    result.push(array1[i] * array2[i]);
  }

  return result;
}