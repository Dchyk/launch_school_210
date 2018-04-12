function twice(n) {
  if (isDoubleNumber(String(n))) {
    return n;
  } else {
    return n * 2;
  }
}

function isDoubleNumber(stringNum) {
  var half = stringNum.length / 2;
  if (stringNum.length % 2 === 0) {
    return stringNum.substring(0, half) === stringNum.substring(half);
  } else {
    return false;
  }
}