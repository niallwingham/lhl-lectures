const createCli = require('./src/cli');

const todos = [];
let nextId = 1;

function getTodo(id, cb) {
  const result = todos.find(todo => todo.id === id) || null;
  cb(null, result);
}

function getAll(cb) {
  const result = todos;
  cb(null, result);
}

function getDone(cb) {
  const result = todos.filter(todo => todo.done);
  cb(null, result)
}

function getNotDone(cb) {
  const result = todos.filter(todo => !todo.done);
  cb(null, result);
}

function createTodo(description, cb) {
  const todo = { id: nextId++, description, done: false };
  todos.push(todo);
  cb(null, todo);
}

function remove(id, cb) {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    cb(null, true);
  }
  cb(null, false);
}

function markDone(id, cb) {
  const todo = getTodo(id, (err, todo) => {
    if (todo !== null) {
      todo.done = true;
    }
    cb(null, todo);
  });
}

function markNotDone(id, cb) {
  const todo = getTodo(id, (err, todo) => {
    if (todo !== null) {
      todo.done = false;
    }
    cb(null, todo);
  });
}


// Make some sample data
createTodo('Make an app', () => {});
createTodo('Raise VC', () => {});
createTodo('???', () => {});
createTodo('Profit!', () => {});

// Start the application
const cli = createCli({
  getTodo,
  getAll,
  getDone,
  getNotDone,
  createTodo,
  remove,
  markDone,
  markNotDone
});
cli.start();
