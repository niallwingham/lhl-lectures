## Agenda
- Intro
    - Ask how the week is going so far
    - Review the primitive types we already know: numbers, strings, booleans (null, undefined, NaN)
    - Review arrays, and arrays of arrays
    - Sometimes you want to group a bunch of primitive values together...
    - Show arrays of mixed types used to group values together
- Then demo objects (maybe a profile or blog post?) **KL1, KL2**
    - Show that brackets and dot notation can both be used to read and write values. **KL4**
        - Optional: show using a variable with square bracket notation
    - Observe that keys must be strings (and are coerced into strings if not specified as strings)
    - Demo that asking for a key that doesn’t exist returns undefined
    - Demo array values in an object and getting values out (be clear what each part of the overall expression refers to) **KL3**
- Naming things, functions, and parameters
    - Introduce the idea of the same thing having different names
    - Show how with objects, you can also change the value of what the name refers to
    - Whiteboard illustrating of what's going on with names
    - [ BREAK ]
    - Show how with primitive types, all you can really do is assign the name to a new primitive value
    - Show how each behaves inside functions (assigning to a parameter is the same as assigning to another name) **KL5**
- Functions and objects
    - Make some helper functions that accept an object as first parameter and do some useful things
    - But sometimes we want our functions to be even more closely tied to our objects…
    - Can we put functions in an object?  YES ^_^
    - Show adding a function to an object literal using a function expression, and using the “this” keyword instead of argument **KL6**
    - Show other ways of adding functions to objects:
        - Defining a function using a function statement, and then assigning it to a few objects inside a literal
        - Loop over the objects and add the functions you want
        - Even better ways of doing this that we’ll see in future weeks
    - Contrast the two styles: starting to see hints of object oriented vs. functional programming
- Bonus
    - for-in loop (iterate over keys).  Highlight `object[key]` where key is not a string literal but a variable with a string value inside it!  Cool!
    - Object.keys
    - Object.values
    - Object.entries (a sensible array of arrays!)
    - Array.isArray

## Throughout
- Demonstrate doing a google search for documentation, specify MDN is a good place to look
- Prefer var over let or const
- Lots of questions and student interactions
- Ask questions to Montreal, and check for incoming questions from them
- Make sure to clean up / comment out old test output so each execution of a file is clear and instructive
- Use new files where appropriate


## Key Learning Objectives

**What is an object?**
Objects are key/value pairs.

They're useful for grouping a bunch of related values together, like a user’s profile, or a blog post with metadata.

**How do you create an object?**
Using curly braces and semi-colons.

This is called an “object literal expression”.  The keys must be strings.

**What can go inside an object?**
Anything!

Primitive values, arrays, other objects, functions, and any combination of them.

**How do you read values out of an object?**
Using “dot notation”.

This is a synonym for square bracket notation.  Square bracket notation is still useful if your string key includes spaces, hyphens, or other special characters that don’t work with dot nation.  It's also useful you have a string variable holding the value of your key (instead of a string literal).  By the way, if you ask for a key that doesn’t exist, you’ll just get `undefined`.

**How do primitives and objects behave inside functions?**
Primitives don't change outside the function, but objects can.

Remember, this is only true for parameters or other names defined _inside_ the function.  If you use a name that doesn't exist inside the function, you can still end up using and changing a global variable defined outside the function.

**What is the this keyword?**
It’s called the “context” and it refers to the object calling a function.

There are other ways to change what value `this` refers to, and reasons for doing so, but we won’t worry about them for now :)
