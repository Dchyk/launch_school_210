function logOddNumbers(int) {
  for (var i = 1; i <= int; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// Further exploration

function logOddNumbersDifferently(int) {
  for (var i = 1; i <= int; i += 2) {
    console.log(i);
  }
}

function skipEvensLogOdds(int) {
  for (var i = 1; i <= int; i++) {
    if (i % 2 === 0) {
      continue
    } else {
      console.log(i);
    }
  }
}