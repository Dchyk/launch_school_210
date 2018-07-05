// Returns true if all letters in the string arg are uppercase.
// Ignore characters that are not letters.

function isUppercase(str) {
  if (str.match(/[a-z]/)) {
    return false;
  } else {
    return true;
  }
}