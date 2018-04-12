function shortLongShort(str1, str2) {
  var result = '';

  if (str1.length > str2.length) {
    result = str2 + str1 + str2;
  } else {
    result = str1 + str2 + str1;
  }

  return result;
}