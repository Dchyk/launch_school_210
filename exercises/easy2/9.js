function cleanUp(str) {
  var cleaned = '';
  var alphas = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < str.length; i++) {
    if (alphas.includes(str[i])) {
      cleaned += str[i];
    } else if (alphas.includes(str[i + 1]) || str[i + 1] === undefined ) {
      cleaned += ' ';
    } else {
      continue;
    }
  }

  return cleaned;
}