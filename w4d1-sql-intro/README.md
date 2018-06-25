# Intro to relational databases and SQL

Tables! Relations! Primary keys! Foreign keys! Welcome to the world of relational databases and SQL.

You can find the database and queries for this lecture in [my repo](https://github.com/niallwingham/lhl-lectures/tree/master/w4d1-sql-intro).

Today: MUSIC.

We're going to design and build a database for "IMDB", the Internet _Music_ Database.  We'll see how to think about out data, draw a model to represent those ideas, and finally turn that model into database code.

## ERD - Entity Relationship Diagrams

Very often, the first step in designing an application is to think about the data you'll be working with.  What things (_entities_) exist in your application, what _attributes_ do they have, and how are they _related_?  This process can be called **Entity Relationship Diagramming**.

ERD is a well-established standard used to visualize database relationships (and more!). There are several tools available to draw ERDs and even convert them directly into SQL code to create tables. [Lucidchart](http://www.lucidchart.com) is a good example of online ERD and has some useful documentation [here](https://lucidchart.zendesk.com/hc/en-us/articles/207299756-Entity-Relationship-Diagrams) and [here](https://www.lucidchart.com/pages/ER-diagram-symbols-and-meaning).

Here's an ERD example for the music database we've discussed in class:

![Music Database ERD](https://fzero.github.io/lhl-lectures/assets/musicdb.svg)

## How data is organized in relational databases

* Database: the structure of information and the data stored within that structure
  * Tables: represent collections of information
    * Rows: represents a single object in a particular collection/table
      * Columns (or fields)
* Keys
  * Primary keys
    * Provide a way to uniquely identify each row in a table.
    * By convention, we use an auto-incrementing counting number. This column is named identically (usually `id`) in every table for programming convenience.
  * Foreign keys
    * Describe the association between two tables.
    * The data in a foreign key column in the child table must be the same as the data in the primary key column of a row in the parent table.

## Querying using SQL

Relational databases have their own language to manipulate data, called [SQL](https://en.wikipedia.org/wiki/SQL). The language itself is fairly simple, with the basic CRUD operations represented by four commands: `INSERT`, `SELECT`, `UPDATE` and `DELETE`.

Each one of these commands have a number of options to restrict operations using conditions (`WHERE`), aggregate results (`SUM`, `AVERAGE`, ...), group data (`GROUP BY`) and sort results (`ORDER BY`).

A SQL statement can (and should) be divided in multiple lines. The end of the statement is always marked by a semicolon (`;`).

`SELECT` statements are broken up into seven clauses:

1. `SELECT` - list the data you wanna get
2. `FROM` - list the tables that you wanna get data from
3. `WHERE` - filter down which rows are gonna come in the output
4. `GROUP BY` - treat a bunch of rows that would have been in the output as a single row
5. `HAVING` - is like WHERE for the result of aggregated data
6. `ORDER BY` - what order do you want the resulting rows to come back in
7. `LIMIT` - how many rows do you want to come back

Example:
```sql
SELECT
  total_amount
FROM
  invoices
WHERE
  total_amount > 100
ORDER BY
  total_amount DESC
LIMIT 10;
```

### `JOIN`s

`JOIN`s allow you to cross-reference data between two tables. They put the _relational_ in _relational databases_.

Example:
```sql
-- Find all tracks including with artist name and album name

SELECT
  tracks.title AS title,
  albums.title AS album,
  artists.name AS artist
FROM tracks
JOIN albums ON tracks.album_id = albums.id
JOIN artists ON albums.artist_id = artists.id;
```

### `OUTER JOIN` vs `INNER JOIN`

The difference is simple:
* `OUTER JOIN`s will return all results present on the left side (or first table) of the join **no matter if related data is present on the right side**.
* `INNER JOIN`s will only return data if **both sides of the relationship contain the referenced data**.

In other words, `INNER JOIN`s need reciprocity, while `OUTER JOIN`s don't care.

When the type of `JOIN` isn't specified, SQL will assume you're talking about a `INNER JOIN`.

## Creating the database and loading some data

We're using [PostgreSQL](https://www.postgresql.org/) for our example database. To recreate the data discussed in class on your machine, follow the steps below:

1. Import schema and load initial data: `psql < pgseed.sql`
2. Open the `psql` REPL: `psql`
3. Once inside you can use both psql REPL commands (they always start with a backslash) and SQL statements:
```sql
-- List all tables
\dt

-- Check the schema of a given table
\d artists

-- Now let's list all artists. Remember: all SQL statements must end with ;
SELECT * from artists;

-- Exit the REPL when you're done
\q
```

There are several example queries in the [`queries.sql`](queries.sql) file. You can copy-paste them into the REPL to test them.

## SQL vs NoSQL

This is a large topic in itself, but the number one takeaway is: relational databases have been around forever and they work really well!  It should be the default for almost every application until some specific problem makes you switch to a different database technology.

Document or "NoSQL" databases may be useful if you have a truly huge amount of data to work with with particular usage patterns (e.g. adding hundreds of new documents per second).

There are other kinds of databases too, like Graph Databases and Key/Value Stores.  But again, a relational database is the best place to start.

## Futher/Advanced Reading on SQL

We talked about some fun bonus topics at the end.  You don't need to fully understand these yet!  But here is a list of the topics I described and links to the PostgreSQL documentation for more details.

- [Data types](https://www.postgresql.org/docs/10/static/datatype.html)
- [Default values](https://www.postgresql.org/docs/10/static/ddl-default.html)
- [Functions and operators](https://www.postgresql.org/docs/10/static/functions.html)
- [User-defined functions](https://www.postgresql.org/docs/10/static/xfunc-sql.html)
- [Constraints](https://www.postgresql.org/docs/current/static/ddl-constraints.html)
- [Indexes](https://www.postgresql.org/docs/10/static/indexes.html)
- [Triggers](https://www.postgresql.org/docs/10/static/sql-createtrigger.html)
- [Subqueries](https://www.postgresql.org/docs/current/static/functions-subquery.html)
- [Views](https://www.postgresql.org/docs/10/static/tutorial-views.html)
- [Explain](https://www.postgresql.org/docs/10/static/sql-explain.html)

## Key Learning Objectivse

1. Postgres is another type of database, like MongoDB.  You also run _two_ processes on your computer: the database server (`postgres` command, which your vagrant machine may start automatically for you) and the database client (`psql` command).

2. Postgres is a relational database.  Relational databases need a structure, or **schema** for their data.  A schema is a set of **tables**, and each table has a set of **columns**.  Columns have at least a name and a data type.  They can also define other properties and rules (e.g. "This column's value must be unique" or "This column's value can't be null").

3. To come up with a schema, we talk a lot about what our application needs to do, and can then formalize our notes using **Entity Relationship Diagrams**.  The questions we asked where: what things (_entities_) exist in our application, what _attributes_ do they have, and how are they _related_?

4. There are two special kinds of relationships between tables: **One-to-Many** relationships and **Many-to-Many** relationships.  We saw how to implement these in SQL (using a foreign key on the "many" side for one-to-many; and using a linking table for many-to-many).

5. SQL has two kinds of commands: DDL to define schema; and DML to do things with your data (e.g. CRUD).  We saw basic commands on both sides for creating tables, implementing CRUD, and doing some interesting queries on top.
