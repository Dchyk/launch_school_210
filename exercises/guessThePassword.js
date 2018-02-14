function isCorrect(password) {
  return (password === 'password');
}

function tryLogin() {
  var attempt = 1;

  while (attempt <= 3) {
    var input = prompt('What is the password:');

    if (isCorrect(input)) {
      console.log('You have successfully logged in.');
      break;
    } else {
      console.log('You have been denied access.');
      attempt += 1;
    }
  }
}

tryLogin();