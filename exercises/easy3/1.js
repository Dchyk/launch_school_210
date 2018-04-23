function randomAge(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var age = randomAge(20, 200);

console.log('Teddy is', age, 'years old!');