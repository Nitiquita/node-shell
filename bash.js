// console.log(Object.keys(process));

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var commands = require('./command'); // commands is an object
  commands[cmd.split(" ")[0]](cmd, done);
  // if (cmd === "pwd" || cmd === "date" || cmd === "ls") {
  //   commands[cmd.split(" ")[0]]; // cmd is a property on commands and we also called our passed in cmd on this property
  // } else if (cmd.split(" ")[0] === "echo") {
  //   commands["echo"](cmd);
  // }
});

var done = function (output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}