const fs = require('fs');

const FILENAME = './todo.txt';
const COMPLETED = './done.txt';

function report(todo) {
  let doneData;
  try {
    doneData = fs.readFileSync(COMPLETED, 'utf8');
  } catch (error) {
    console.log("There are no completed todos!");
    return;
  }
  let completes = doneData.split("\n");
  let complete = uniqBy(completes, JSON.stringify);
  fs.writeFileSync(COMPLETED, complete.join('\n'));
  const [month, day, year] = new Date().toLocaleDateString("ist").split("/");
  console.log(`${year}-0${month}-${day} Pending : ${todo.length} Completed : ${complete.length - 1}`);
}
function completed() {
  let doneData;
  try {
    doneData = fs.readFileSync(COMPLETED, 'utf8');
  } catch (error) {
    console.log("There are no completed todos!");
    return;
  }
  let completes = doneData.split("\n");
  completes.pop();
  if (!completes) {
    console.log("There are no completed todos!");
  } else {
    for (let i = completes.length; i > 0; i--) {
      console.log(`[${i}] ${completes[i - 1]}`);
    }
  }
}
function ls(todo) {
  if (!todo) {
    console.log("There are no pending todos!");
  } else {
    for (let i = todo.length; i > 0; i--) {
      console.log(`[${i}] ${todo[i - 1]}`);
    }
  }
}
function done(todo, args) {
  const del = args[1];
  const doneItem = todo[del - 1];
  if (del <= todo.length && del != 0) {
    todo.splice(del - 1, 1);
    fs.writeFileSync(FILENAME, todo.join('\n') + '\n');
    console.log(`Marked todo #${del} as done.`);
    fs.appendFileSync(COMPLETED, doneItem + '\n');
  } else if (del === undefined) {
    console.log("Error: Missing NUMBER for marking todo as done.");
  }
  else {
    console.log(`Error: todo #${del} does not exist.`);
  }
}
function del(todo, args) {
  const del = args[1];
  if (!del) {
    console.log("Error: Missing NUMBER for deleting todo.");
  } else if (del < 1 || del > todo.length) {
    console.log(`Error: todo #${del} does not exist. Nothing deleted.`);
  } else {
    todo.splice(del - 1, 1);
    fs.writeFileSync(FILENAME, todo.join('\n') + '\n');
    console.log(`Deleted todo #${del}`);
  }
}
function uniqBy(a, key) {
  const seen = {};
  return a.filter(function (item) {
    const k = key(item);
    return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  });
}
function add(args) {
  const content = `${args[1]}
`;
  if (!args[1]) {
    console.log("Error: Missing todo string. Nothing added!");
    return;
  }
  fs.appendFile(FILENAME, content, () => {
    console.log(`Added todo: "${args[1]}"`);
  });
}
function read() {
  let data
  try {
    data = fs.readFileSync(FILENAME, 'utf8');
  } catch (error) {
    return;
  }
  const todos = data.split("\n");
  if (todos.includes('')) {
    todos.pop();
  }
  let todo = uniqBy(todos, JSON.stringify);
  fs.writeFileSync(FILENAME, todo.join('\n') + '\n');
  return todo;
}
module.exports = { add, ls, report, done, del, read, completed }
