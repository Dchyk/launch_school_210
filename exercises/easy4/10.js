function average(array) {
  return Math.floor(array.reduce( function(a, b) {
    return a += b;
  }) / array.length);
}