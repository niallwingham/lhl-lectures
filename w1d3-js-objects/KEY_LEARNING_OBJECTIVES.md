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

**How do primitives and objects behave inside functions?**  Primitives don't change outside the function, but objects can. 

Remember, this is only true for parameters or other names defined _inside_ the function.  If you use a name that doesn't exist inside the function, you can still end up using and changing a global variable defined outside the function.

**What is the this keyword?**
It’s called the “context” and it refers to the object calling a function. 

There are other ways to change what value `this` refers to, and reasons for doing so, but we won’t worry about them for now :)
