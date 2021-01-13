# todo-cli

A command line program that manages todo tasks

## Getting started

### 1. Install Node.js

You need to have npm installed in your computer. It comes with Node.js and you can get it by installing Node from https://nodejs.org/en/

### 2. Install dependencies

Run `npm install` to install all dependencies.

### 3.Create symbolic link to the executable file

The `npm link` command is used from within the NodeJS package directory
we want to symlink:

```
> npm link
```

## Usage

### 1. Help

Executing the command without any arguments, or with a single argument `help` prints the CLI usage.

```
$ todo help
Usage :-
$ todo add "todo item"  # Add a new todo
$ todo ls               # Show remaining todos
$ todo del NUMBER       # Delete a todo
$ todo done NUMBER      # Complete a todo
$ todo help             # Show usage
$ todo report           # Statistics
$ todo completed        # show completed todos
```

### 2. List all pending todos

Use the `ls` command to see all the todos that are not yet complete. The most recently added todo displays first.

```
$ todo ls
[2] change light bulb
[1] water the plants
```

### 3. Add a new todo

Use the `add` command. The text of the todo item should be enclosed within double quotes (otherwise only the first word is considered as the todo text, and the remaining words are treated as different arguments).

```
$ todo add "the thing i need to do"
Added todo: "the thing i need to do"
```

### 4. Delete a todo item

Use the `del` command to remove a todo item by its number.

```
$ todo del 3
Deleted todo #3
```

Attempting to delete a non-existent todo item will display an error message.

```
$ todo del 5
Error: todo #5 does not exist. Nothing deleted.
```

### 5. Mark a todo item as completed

Use the `done` command to mark a todo item as completed by its number.

```
$ todo done 1
Marked todo #1 as done.
```

Attempting to mark a non-existed todo item as completed will display an error message.

```
$ todo done 5
Error: todo #5 does not exist.
```

### 6. Generate a report

Use the `report` command to see the latest tally of pending and completed todos.

```
$ todo report
yyyy-mm-dd Pending : 1 Completed : 4
```

### 7. List completed todos

use the `completed` command to see the list of completed todos.

```
$ todo completed
[2] change light bulb
[1] water the plants
```
