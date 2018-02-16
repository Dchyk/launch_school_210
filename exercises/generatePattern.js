function generatePattern(rows) {
  for (var currentRow = 1; currentRow <= rows; currentRow++) {
    var output = '';
    var counter = 1;
    var stars = rows - currentRow;

    while (counter <= currentRow) {
      output += counter;
      counter++;
    }

    while (stars >= 1) {
      if (currentRow >= 9) {
        output += '**';
      } else {
        output += '*';
      }

      stars--;
    }

    console.log(output)
  }
}
