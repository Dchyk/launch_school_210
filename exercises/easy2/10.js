function century(year) {
  var number = 0;
  var stringYear = '';
  var suffix = '';

  var inputYear = year;

  while (year > 0) {
    number += 1;
    year -= 100;
  }

  stringYear = String(number);

  var suffixYear = number % 100;

  if (suffixYear > 13) {
    suffixYear = suffixYear % 10;
  }

  switch (suffixYear) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }

  return stringYear + suffix;
}