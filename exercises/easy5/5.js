// Always return a negative number

function negative(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}


// Alternate syntax

function negative(num) {
  return (num < 0) ? num : -num;
}