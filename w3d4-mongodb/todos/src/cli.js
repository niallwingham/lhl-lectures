const readline = require('readline');
const chalk = require('chalk');
const logo = require('./logo');

module.exports = ({ getTodo, getAll, getDone, getNotDone, createTodo, remove, markDone, markNotDone }) => {

  function help(args, cb) {
    commands.forEach(command => {
      formattedArguments = command.arguments.map(arg => `[${arg}]`).join(' ');
      console.log(`${chalk.bold(command.name)} ${chalk.italic(formattedArguments)}`);
      console.log(`  ${command.description}`);
    });
    cb();
  }

  function exit(args, cb) {
    console.log('Bye!\n');
    rl.close();
    cb();
  }

  function list(filter, cb) {
    const get = (
      (filter === 'done' && getDone) ||
      (filter === 'todo' && getNotDone) ||
      getAll
    );
    const todos = get((err, todos) => {
      todos.forEach(todo => {
        console.log(`[${todo.done ? 'x' : ' '}] ${todo.description} ${chalk.gray(`(${todo._id})`)}`);
      });
      cb();
    });
  }

  function add(description, cb) {
    createTodo(description, (err, todo) => {
      console.log(`Added ${chalk.bold(description)} to your TODO list.`);
      cb();
    });
  }

  function finish(id, cb) {
    id = parseInt(id, 10);
    const todo = getTodo(id, (err, todo) => {
      if (todo !== null) {
        markDone(id, (err, todo) => {
          console.log(`Marked ${chalk.bold(todo.description)} as ${chalk.bold('done')}.`);
          cb();
        });
      } else {
        console.log(chalk.red(`TODO #${id} not found`));
        cb();
      }
    });
  }

  function restart(id, cb) {
    id = parseInt(id, 10);
    const todo = getTodo(id, (err, todo) => {
      if (todo !== null) {
        markNotDone(id, (err, todo) => {
          console.log(`Marked ${chalk.bold(todo.description)} as ${chalk.bold('TODO')}.`);
          cb();
        });
      } else {
        console.log(chalk.red(`TODO #${id} not found`));
        cb();
      }
    });
  }

  function erase(id, cb) {
    id = parseInt(id, 10);
    const todo = getTodo(id, (err, todo) => {
      if (todo !== null) {
        remove(id, (err, success) => {
          console.log(`Removed ${chalk.bold(todo.description)}.`);
          cb();
        });
      } else {
        console.log(chalk.red(`TODO #${id} not found`));
        cb();
      }
    });
  }

  const commands = [
    {
      name: 'list',
      arguments: ['all|done|todo'],
      description: 'Print all TODOs',
      run: list,
    },
    {
      name: 'add',
      arguments: ['description'],
      description: 'Add a new TODO',
      run: add,
    },
    {
      name: 'finish',
      arguments: ['id'],
      description: 'Mark a TODO as done',
      run: finish,
    },
    {
      name: 'restart',
      arguments: ['id'],
      description: 'Mark a TODO as not done',
      run: restart,
    },
    {
      name: 'delete',
      arguments: ['id'],
      description: 'Permanently delete a TODO',
      run: erase,
    },
    {
      name: 'help',
      arguments: [],
      description: 'Print this help content',
      run: help,
    },
    {
      name: 'exit',
      arguments: [],
      description: 'Quit the TODO application',
      run: exit,
    },
  ];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function prompt() {
    rl.question('\n> ', answer => {
      const index = answer.includes(' ') ? answer.indexOf(' ') : answer.length;
      const name = answer.substr(0, index);
      const args = answer.substr(index + 1);
      const selectedCommand = commands.find(command => command.name === name);
      if (selectedCommand === undefined) {
        console.log('huh?');
        prompt();
      } else {
        selectedCommand.run(args, (error) => {
          if (error) {
            console.log(chalk.red(error.stack));
          }
          if (selectedCommand.name !== 'exit') {
            prompt();
          }
        });
      }
    });
  }

  return {
    start: () => {
      console.log(`Welcome to...\n\n${chalk.red(logo)}\n`);
      help('', prompt);
    }
  };
};
