function runningTotal(){
  var totals = [];
  var i;
  var total = 0;

  for (i = 0; i < arguments.length; i++) {
    totals.push(arguments[i] + total);
    total = totals[i];
    console.log(total);
  }

  return totals;
}

function runningTotal(){
  if (arguments.length < 2) {
    return arguments;
  }

  var totals = [];
  var i;
  
}