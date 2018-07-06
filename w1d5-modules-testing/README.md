# Agenda

## Introduction
- Questions?
- Review:
  - Objects
  - Functions
  - Callbacks
- What we're learning today: modules, packages, and testing

## Modules
- Splitting code between files -- why would we want to do this?
- How can one file use what's in another file?
- Each file is a module
- `module.exports` and `require`
- Reassigning `module.exports`
- Private state inside a module
- Lets make a "math" module to play around with...

## Packages
- Modules are great for structuring your own program's code, but you often want to include other programs as well.  Another program could be anything from a single utility function (e.g. [left-pad](https://www.npmjs.com/package/left-pad)) or an entire application framework (e.g. [express](https://www.npmjs.com/package/express)).
- These "other programs" you include in your own program are called **packages** in node.  They're also often called a variety of other names like "dependencies" or "libraries".
- A package is:
  1. One or more modules (i.e. JavaScript files)
  2. A `package.json` file describing the modules and how to include them
- Once you make your own program a package, you can **install** other packages.  We do this using `npm`.
  - `npm init`
  - `npm install <package-name>`
  - `npm ls`
  - `npm uninstall <package-name>`
- Once you have a package installed, you can **require** it using the name of the package (instead of a relative file path, like you do for modules a.k.a. files in your own program).
- Play around with left-pad, chalk, and figlet
- More details about `npm`
  - Where are modules installed?
  - If a pacakge has more than one module in it, how does node know _which_ one to require?
  - Package versions, semantic versioning: major/minor/patch), and `npm update`
  - Git ignoring the `node_modules` directory.
  - After checking out someone else's program, you can run `npm install` with no arguments to install everything from scratch
  - Different types of dependencies: `production`, `development`, and `global`

Break?

## Testing
- Testing our code the simplest way... just print out some values and see if they're what we expect
- Using the built-in `assert` package
- Using `mocha` to write a test suite
- Using npm scripts to run the test suite
- What are test suites good for?
  - The act of writing a test suite will help you think through "edge" cases and often catch bugs before even running the tests!
  - Help to catch bugs when you add a new feature that accidentally changes and old one
  - Help to catch bugs when you (or someone else) tries to refactor the code in the future
  - Help to describe what a module or package actually does

## Key Learning Objectives

- What is a module?
- How do you share code between modules? (`module.exports` and `require`)
- What is a package?
- How do you install and use packages? (`npm init`, `npm install <package-name>`, and `require`)
- How do you make a test suite using the `mocha` package?
