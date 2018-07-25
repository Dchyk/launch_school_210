// You have a bank of switches before you, numbered from 1 to n. 
// Every switch is connected to exactly one light that is initially off. 
// You walk down the row of switches and toggle every one of them. 
// You walk back to the beginning of the row and start another pass. 
// On this second pass, you toggle switches 2, 4, 6, and so on. 
// On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. 
// You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

// Examples:

// lightsOn(1);         // [1]
// lightsOn(2);         // [1]
// lightsOn(3);         // [1]

// ['off', 'off', 'off'] // initial
// ['on', 'on', 'on']    // 1
// ['on', 'off', 'on']  //  2
// ['on', 'off', 'off']  //  3 // [1]

// lightsOn(4);        // [1, 4]

// ['off', 'off', 'off', 'off'] // initial
// ['on', 'on', 'on', 'on']     // 1
// ['on', 'off', 'on', 'off']   // 2
// ['on', 'off', 'off', 'off'] //  3
// ['on', 'off', 'off', 'on']  //  4

// lightsOn(5);        // [1, 4]
// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// input - an integer n
// output - an array of "switches" (integers)
// algorithm
// - create an array with n slots, all holding the boolean "false" as they are "off"
// - iterate over the array n times.
// - at each iteration, starting with 1 and going up to n, set any lights whose number (their index + 1)
//   is divisible by the current round number
// - return an array of the indices of elements that are marked "on" after n iterations (the indices should be offset by 1 so that 0 is the 1 light, etc)


function lightsOn(n) {
  var lights = setOfLights(n);
  var i;

  for (i = 1; i <= n; i += 1) {
    lights = lights.map(function(light, index) {
      return ((index + 1) % i === 0) ? !light : light;
    });
  }

  return lights.map(lightNumbers).filter(isOn);
}

function lightNumbers(light, index) {
  return light ? (index + 1) : light;
}

function isOn(light) {
  return typeof light === 'number';
}

function setOfLights(n) {
  var lights = [];
  var i;

  for (i = 1; i <= n; i += 1) {
    lights.push(false);
  }

  return lights;
}