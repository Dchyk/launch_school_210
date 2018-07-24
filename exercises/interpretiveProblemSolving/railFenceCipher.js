// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .


// Encoding version -
// input: a string, and an integer (number of rails)
// output: a string

// data structure: an array of arrays
// 
// algorithm:
// - strip spaces from input string, and convert to uppercase
// - create an array containing integer (number of rails) of subarrays
// - initialize a counter "c" at 0 to track the current character 
// - initialize a counter "r" at 0 to track the current rail
// - at each step in a loop, 
//   - push the current character from the input string at position "c"
//     into the subarray at "r" (rail)
//   - push "." into position "c" in the other (integer - 1) subarrays
//  - add 1 to "c"
//  - - if "r" is currently less than number of rails - 1, 
//  - -  then if "direction" is "down", add 1 to "r"
//  - -  else, "direction" must be "up", so subtract 1 from "r"
// - -  after this addtion, if "r" is equal to the number of rails - 1, set "direction" to "up"
// - -  else if "r" is equal to "0" (ie, the first rail), set direction to "down"