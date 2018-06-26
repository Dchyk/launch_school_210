function isValidEmail(email) {
  var match = email.match(/[a-z0-9]+@\w+\.([a-z]+\.?)+/i);

  if (match && match[0] === email){
    return true;
  } else {
    return false;
  }
}

// LS Solution
function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}