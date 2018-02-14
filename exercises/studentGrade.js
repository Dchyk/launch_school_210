var grade;
var total = 0;

total += parseInt(prompt('Enter score 1:'), 10);
total += parseInt(prompt('Enter score 2:'), 10);
total += parseInt(prompt('Enter score 3:'), 10);

var average = total / 3;

console.log(average);

if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log('Based on the average of your 3 scores your letter grade is \"', grade, '\"' );

// Further exploration

var grades = []
var input;

while (true) {
  input = prompt('Please enter a grade to be averaged, or \"done\" if done: ');
  if (input === 'done') {
    break;
  } else {
    grades.push(Number(input));
  }
}

var total = 0;

for (var i = 0; i < grades.length; i++) {
  total += grades[i];
}

var average = total / grades.length;

if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log('Based on the average of your 3 scores your letter grade is \"', grade, '\"' );
