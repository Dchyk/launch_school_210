function sequence(count, startingNum) {
  var sequence = [];
  var i; 

  for (i = count; i > 0; i -= 1) {
    sequence.push(i * startingNum);
  }

  return sequence.reverse();
}