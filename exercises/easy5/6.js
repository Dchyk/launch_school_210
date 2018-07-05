function sequence(terminus) {
  var counter;
  var sequence = [];

  for (counter = 1; counter <= terminus; counter += 1) {
    sequence.push(counter);
  }

  return sequence;
}