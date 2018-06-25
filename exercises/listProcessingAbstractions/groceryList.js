function buyFruit(fruits) {
  var fruitList = [];
  var i;
  var j;

  for (i = 0; i < fruits.length; i += 1) {
    for (j = 1; j <= fruits[i][1]; j += 1) {
      fruitList.push(fruits[i][0]);
    }
  }

  return fruitList;
}

fruits.forEach(function(fruit) {
  
});


buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
