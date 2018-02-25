function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  substring = '';

  for (var i = 1; i <= length; i++) {
    if (string[start] === undefined) {
      break;
    } else {
    substring += string[start]
    start += 1;
    }
  }

  return substring;
}

function subStringTwo(string, start, end) {
  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end === undefined) {
    end = (string.length)
  } else if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  if (start < end) {
    return substr(string, start, (end - start));
  } else if (start > end) {
    return substr(string, end, (start - end));
  } else if (start === end) {
    return '';
  }
}