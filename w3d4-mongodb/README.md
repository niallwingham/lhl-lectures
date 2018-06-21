Thank you for joining me on an exciting/terrifying journey into the world of databases!  All the code and notes you saw today are posted on my github [here](https://github.com/niallwingham/lhl-lectures/tree/master/w3d4-mongodb).

`<Congratulations>`

🎉🎉 At this point you know how to make a web user interface (HTML/CSS/JavaScript), a web server (Node/JavaScript), and now a database (MongoDB).  This officially makes you a _full stack web developer!_ 🎉🎉

`</Congratulations>`


Your **Key Learning Objectives** today were:

### 1. Why do we need databases?

Web servers are stateless.  We need databases to store state for our applications.  State is everthing the application knows, e.g. user accounts, friendships, and posts.

### 2. What is MongoDB?

MongoDB is a document database.  A **document** is similar to a JavaScript object.  Documents are stored in **collections** which are stored in **databases**.

### 3. How do you use MongoDB?

A database runs on a **server** and you connect to it using a **client**.  A client can be a command line (the `mongo` command) or an application (e.g. a JavaScript application using the `mongodb` package).

#### Starting the server

```bash
# Just run the "mongod" command!
niall$ mongod
```

#### Connecting on the command line

```bash
# Connect using the "mongo" command, which opens a "mongo shell" connected to the server
niall$ mongo

# Show the available databases
> show dbs
admin   0.000GB
config  0.000GB

# Select a database to use (may be a new one)
> use lhl

# Show the collections in this database
> show collections

# No collections yet!  Start by inserting some data.
> db.people.insertMany([
  { name: 'Niall', age: 29 },
  { name: 'Nyla', age: 28 },
  { name: 'Inara', age: 1 },
])

# Let's exit the shell for now
> exit
```

#### Connecting from JavaScript

```js
// Import the "mongodb" package we have installed with npm
const MongoClient = require('mongodb').MongoClient;

// Connect to the database server
MongoClient.connect('mongodb://localhost:27017', function (error, client) {

  // Once connected, select a database and collection to use
  const db = client.db('lhl');
  const peopleCollection = db.collection('people');

  // Find the people we inserted on the command line
  peopleCollection.find({}).toArray(function (error, peopleDocuments) {

    // Once the data is returned by the server, log it to the console
    // (This will be a plain JavaScript array of JavaScript objects)
    console.log(peopleDocuments);

    // Close the database connection
    client.close();
  });
});
```

### 4. How do we implement "CRUD" with MongoDB?

Some common operations are:

* `insertOne` and `insertMany` to "create"
* `findOne` and `findMany` to "read"
* `replaceOne`, `updateOne`, and `updateMany` to "update"
* `deleteOne` and `deleteMany` to "delete"

You can read more about them [here](https://docs.mongodb.com/manual/crud/) and see a full reference of mongo commands [here](https://docs.mongodb.com/manual/reference/method/#collection).

Also remember that for "updating" there are two styles: `replaceOne` lets you change the entire document at once by passing a new, complete version of the document.  `updateOne` and `updateMany` lets you do more fine-grained operations by passing in an object that represents _instructions_ for updating the document, like `{ $set: { age: 30 } }`.
