#!/usr/bin/env node

const { add, ls, report, done, del, read, completed } = require("./operations");

const args = process.argv.slice(2);
const usage = `Usage :-
$ ./todo add "todo item"  # Add a new todo
$ ./todo ls               # Show remaining todos
$ ./todo del NUMBER       # Delete a todo
$ ./todo done NUMBER      # Complete a todo
$ ./todo help             # Show usage
$ ./todo report           # Statistics
$ ./todo completed        # show completed todos`;

if (!args[0] || args[0] === "help") {
  console.log(usage);
} else if (args[0] === "add") {
  add(args);
}
else {
  const todo = read();
  if (args[0] === "del") {
    del(todo, args);
  }

  if (args[0] === "done") {
    done(todo, args);
  }

  if (args[0] === "ls") {
    ls(todo);
  }
  if (args[0] === "report") {
    report(todo);
  }
  if (args[0] === "completed") {
    completed();
  }
}
