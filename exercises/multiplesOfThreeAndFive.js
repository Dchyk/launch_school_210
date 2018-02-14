// Logs the multiples of 3 and 5 from 1 to 100 inclusive

function multiplesOfThreeAndFive() {
  for (var i = 3; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(i + '!');
    } else if (i % 5 === 0 || i % 3 === 0) {
      console.log(i);
    }
  }
}

// Further exploration - take a range of numbers as arguments

function multiplesOfARange(start, end) {
  for (var i = start; i <= end; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(i + '!');
    } else if (i % 5 === 0 || i % 3 === 0) {
      console.log(i);
    }
  }
}