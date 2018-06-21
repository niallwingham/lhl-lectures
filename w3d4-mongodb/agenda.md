# Agenda:

* Overview
  * What are databases and why do we need them?
  * What is MongoDB?
  * How do we use MongoDB "as a human" from the command line?
  * How do we use MongoDB "as a program" in a JavaScript application?
* Key Learning Objectives
  1. Web servers are stateless.  We need databases to store state for our applications.  State is everthing the application knows, e.g. user accounts, friendships, and posts.
  2. MongoDB is a document database.  A **document** is similar to a JavaScript object.  Documents are stored in **collections** which are stored in **databases**.
  3. A database runs on a **server** and you connect to it using a **client**.  A client can be a command line (the `mongo` command), or a package (the `mongodb` package).
  4. Some common mongo operations are `insertOne`, `findOne`, `findMany`, `replaceOne`, and `deleteOne`.  You can read more about them [here](https://docs.mongodb.com/manual/crud/) and see a full reference of mongo commands [here](https://docs.mongodb.com/manual/reference/method/#collection).
* Useful commands overview
  * `insertOne` and `insertMany`
    * The special `_id` field
    * Normally you won't specify it, one will be created automatically for you and returned, and then you can use that ID in the future to reference it
    * Sometimes you know the ID you want, and you can specify it when inserting the document
  * `findOne` and `findMany`
    * Show a few basic ways of searching for documents
    * Talk briefly about the wide range of search options
  * `deleteOne` and `deleteMany`
  * `replaceOne`
  * `updateOne` and `updateMany`
