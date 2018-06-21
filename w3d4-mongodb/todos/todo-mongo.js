const MongoClient = require('mongodb').MongoClient;
const createCli = require('./src/cli');

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'lhl';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  const todos = db.collection('todos');

  function getTodo(id, cb) {
  }
  
  function getAll(cb) {
    todos.find({}).toArray((err, response) => {
      cb(err, response);
    });
  }
  
  function getDone(cb) {
    todos.find({ done: true }).toArray((err, response) => {
      cb(err, response);
    });
  }
  
  function getNotDone(cb) {
    todos.find({ done: false }).toArray((err, response) => {
      cb(err, response);
    });
  }
  
  function createTodo(description, cb) {
    todos.insertOne({ _id: nextId++, description: description, done: false })
  }
  
  function remove(id, cb) {
    todos.deleteOne({ _id: id }, (err, response) => {
      cb(err, response);
    });
  }
  
  function markDone(id, cb) {
    todos.updateOne({ _id: id }, { $set: { done: true } })
  }
  
  function markNotDone(id, cb) {
    todos.updateOne({ _id: id }, { $set: { done: false } })
  }

  todos.insertMany([
    { _id: 1, description: 'Make an app', done: false },
    { _id: 2, description: 'Raise VC', done: false },
    { _id: 3, description: '???', done: false },
    { _id: 4, description: 'Profit!', done: false },
  ], function (err, result) {
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
  });

});