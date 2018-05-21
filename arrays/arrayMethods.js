function myForEach(array, func) {
  var i;

  // First, iterate through the array
  for (i = 0; i < array.length; i++) {
    func(array[i]);
  }

  // Functions implicitly return undefined if no return value is explicitly declared
  return undefined;
}

function myFilter(array, func) {
  var i;
  var testedElement;
  var filteredArray = [];

  for (i = 0; i < array.length; i += 1) {
    testedElement = array[i];

    if (func(testedElement)) {
      filteredArray.push(testedElement);
    }
  }

  return filteredArray;
}

function myMap(array, functionArg) {
  var result = [];

  array.forEach( function(element) {
    result.push(functionArg(element));
  });

  return result;
}


function getBooksTitle(books) {
  return books.map( getTitle);
}

var books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

var getTitle = function (book) {
  return book['title'];
};

getBooksTitle(books);
// console output
[
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
]


function myReduce(array, func, initial) {
  var accumulator;
  var startingIndex;
  var i;

  if (initial === undefined) {
    startingIndex = 1;
    accumulator = array[0]
  } else {
    startingIndex = 0;
    accumulator = initial;
  }

  for (i = startingIndex; i < array.length; i += 1) {
    accumulator = func(array[i], accumulator);
  }

  return accumulator;
}


// Every

function myOwnEvery(array, func) {
  array.forEach( function(element) {
    if (!func(element)) {
      return false;
    }
  })

  return true;
}

var isAString = function (value) {
  return typeof value === 'string';
};

myOwnEvery(['a', 'a234', '1abc'], isAString); // returns true
