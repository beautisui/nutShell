let currentPath = '/~';
const file = [];

const displayCurrentPath = function () {
  return "NutShell " + currentPath;
}

function currentDirectry() {
  return "user/" + displayCurrentPath();
}

const echo = function (argument) {
  return argument.join(" ");
}

const cd = function (argument) {
  currentPath = argument;

  return displayCurrentPath() + " % ";
}

const pwd = function () {
  const position = currentDirectry().split(" ");
  return position.join("/");
}

function touch(argument) {
  file.push(argument);
  return "file created successfully!";
}

function ls() {
  return file.join(" ");
}

const help = function () {
  const help = ['echo -> allows users to display lines of text or strings that are passed as arguments.', 'cd   -> changes the current working directory in various operating systems', 'pwd  -> writes to standard output the full path name of your current directory (from the root directory)', 'touch-> helps user to create new file', 'ls   -> the ls command is used to list files'];

  return help.join('\n');
}

const executeCommand = function (getCommand) {
  const [command, ...argument] = getCommand.split(" ");

  const commands = ["echo", "cd", "pwd", "touch", "ls", "help"];
  const commandFn = [echo, cd, pwd, touch, ls, help];

  for (let index = 0; index < commands.length; index++) {
    if (command === commands[index]) {
      return commandFn[index](argument);
    }
  }

  return "No command Found";
}

const runNutShell = function () {
  let continueRunning = true;

  while (continueRunning) {
    const inputCommand = prompt(displayCurrentPath() + " % ");

    if (inputCommand === "exit") {
      continueRunning = false;
      continue;
    }
    console.log(executeCommand(inputCommand));
  }
}

runNutShell();

