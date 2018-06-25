## Live Coding

### Notes

- SQL is not case-sensitive, but for easier reading, we often type keywords in ALL CAPS and our own table/column names in lowercase.  I might drop out of this if my pinky finger gets tired of holding down the shift key ;)
- Live coding comes with typos!  I know two mistakes that I will make for sure: singular table name instead of plural, and forgetting the semicolon at the end of a statement.  So help me out with those!  (And when I make a mistake we can use it as a learning opportunity to understand the error messages psql generates for you)
- I am more afraid of you than you are afraid of me!  So don't be shy: interrupt & ask questions.

### Exercies

- The psql console
    - List databases (\l)
    - Create a database: `CREATE DATABASE lhl`
    - Connect to a database (\c): `\c lhl`
    - Once we have some tables created...
        - List the tables in a database (\dt)
        - Describe a table (\d table_name)
- Simple CREATE and ALTER statements
    - Make tables for artists, albums, and tracks
    - Alter a colum name (to rename a typo)
- Simple SELECT statements
    - View all the artists in the database
    - View all the albums in the database
    - View all the tracks in the database
- Simple INSERT/UPDATE/DELETE statements
    - Add a new artist, change their name, delete them
- Simple sorting and filtering
    - Albums from a certain year (greater than, less than, between)
    - Search for songs by name (LIKE)
    - Only the top rows
- Simple aggregations
    - Count how many tracks are in the database
    - Count how many albums are in the database
    - Earliest and latest albums (MIN/MAX)
    - Average album release year (AVG)
    - Find the longest album in the database (SELECT max(number) from tracks; then lookup by id)
- Simple joining
    - list artists and albums side-by-side
    - list albums and tracks side-by-side
    - list artists and albums and tracks side-by-side
- Aggregations with joins
    - number of albums for each artist
    - as above, sorted by number of albums
    - as above, but only the artists with at least two albums (introduce HAVING)
- Sorting/filtering with joins
- Outer joins...
    - Show artists with tags (string_agg)
    - Add a new artist, album, and tracks
    - Re-run the "artists with tags" query, note the new artist doesn't show up (because they don't have any tags yet)
    - Switch to left outer join

## Survey

### More SQL Features

- Data types
- Default values
- Functions and operators
- User-defined functions
- Constraints
- Indexes
- Triggers
- Subqueries
- Views
- Explain

### Kinds of Databases (SQL vs NoSQL and others!)
