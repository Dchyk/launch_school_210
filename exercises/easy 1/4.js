var bill = parseInt(prompt('What is the bill?'));
var percentage = parseInt(prompt('What is the tip percentage?'));

var tip = (bill * (percentage / 100));

console.log(`The tip is $${tip}`);
console.log(`The total is $${tip + bill}`);