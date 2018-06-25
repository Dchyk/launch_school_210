function isItemAvailable(id, transactions) {
  var transactionsForId = transactionsFor(id, transactions);
  var inTotal = sumOfTransactions(transactionsFor(id, transactions), 'in');
  var outTotal = sumOfTransactions(transactionsFor(id, transactions), 'out');

  return inTotal - outTotal > 0;
}

function sumOfTransactions(transactionsForItem, direction) {
  var transactionsInDirection = transactionsForItem.filter(function(transaction) {
    return transaction.movement === direction;
  })
  
  if (transactionsInDirection.length === 0) {
    return 0;
  } else {
    return transactionsInDirection.map( function (transaction) {
      return transaction.quantity;
    }).reduce( function(a, b) {
      return a + b;
    });
  }
}

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter( function(transaction) {
    return transaction.id === inventoryItem;
  });
}