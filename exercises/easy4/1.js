function dms(angle) {
  var degrees = Math.floor(angle);
  var minutesAndSeconds = (angle - degrees) * 60;
  var minutes = Math.floor(minutesAndSeconds); 
  var seconds = Math.floor((minutesAndSeconds - minutes) * 60);
  
  return padWithZeros(degrees) + '°' + padWithZeros(minutes) + "'" + padWithZeros(seconds) + '"';
}

function padWithZeros(num) {
  var stringNum = String(num);

  if (num <= 9) {
    return '0' + stringNum;
  } else {
    return stringNum;
  }
}