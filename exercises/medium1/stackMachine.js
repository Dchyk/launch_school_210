minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

// input: a string
// output: if PRINT is used, an integer that is the current value of of the register. There can also be no visual output.

// algorithm:
// - initialize a register variable and set it to 0
// - initialize a stack variable and set it to []
// - take the input string and split it at the spaces
// - iterate through the resulting "words" from the input string, and
//   perform the operation defined for each type of "word"
// - - if the word is a number, place that value in the register
// - - otherwise, perform the operation for that word

// Since we know a program will only contain valid tokens, we can use the default part of a switch statement
// to match numbers



function minilang(commandString) {
  var VALID_COMMANDS = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP', 'PRINT'];
  var STACK_COMMANDS = ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'];
  var register =  0;
  var stack    = [];
  var commandsList = commandString.split(' ');
  var i;
  var error = undefined;
  
  commandsList.forEach(function(command) {
    try {
      testForError(command);
      switch(command) {
        case 'PUSH':
          stack.push(register);
          break;
        case 'ADD':
          register += stack.pop();
          break;
        case 'SUB':
          register -= stack.pop();
          break;
        case 'MULT':
          register *= stack.pop();
          break;
        case 'DIV':
          register = Math.floor(register / stack.pop());
          break;
        case 'MOD':
          register = register % stack.pop();
          break;
        case 'POP':
          register = stack.pop();
          break;
        case 'PRINT':
          console.log(register);
          break;
        default:
          register = parseInt(command, 10);
          break;
      }
    }
    catch (e) {
      console.log(e)
    }  
  });
  function testForError(token) {
    if (VALID_COMMANDS.indexOf(token) === -1) {
      throw 'Invalid command detected.'
    } else if (stack.length === 0 && STACK_COMMANDS.indexOf(token) !== -1) {
      throw 'Stack is empty; cannot execute that.'
    }
  }
}

