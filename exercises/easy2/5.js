function triangle(n) {
  var line = '';
  var lineNumber = 1;

  while (lineNumber <= n) {
    for (var i = 0; i <= (n - lineNumber); i++) {
      line += ' ';
    }

    for (var j = 1; j <= lineNumber; j++) {
      line += '*';
    }

    console.log(line);

    line = '';
    lineNumber += 1;
  }

}


// input - an integer n 

// output - n lines, starting with n - 1 spaces and 1 star, then
// n - 2 spaces and 2 stars, ending with n - n spaces and n stars. 

// iterate through 