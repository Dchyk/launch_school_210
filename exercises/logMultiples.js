function logMultiples(number) {
  for (var i = 100; i >= 0; i--) {
    if (i % number === 0 && i % 2 !== 0) {
      console.log(i);
    }
  }
}

// Further exploration

function optimizedLogMultiples(number) {
  var largestMultiple = Math.floor(100 / number) * number;

  for (var i = largestMultiple; i >= number; i -= number) {
    if (i % number === 0 && i % 2 !== 0) {
      console.log(i);
    }
  }
}
