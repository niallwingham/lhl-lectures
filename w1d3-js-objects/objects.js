var niallInfo = {
  name: 'Niall',
  favouriteColour: 'yellow',
  luckyNumbers: [ 3, 4, 62 ],
  printName: printNameInsideObject,
  printLuckyNumbers: function () {
    console.log(this.luckyNumbers.join(', '));
  },
}

var someColourVariableTheUserEntered = 'blue';

var nylaInfo = {
  name: 'Nyla',
  luckyNumbers: [ 7, 9 ],
  favouriteColour: someColourVariableTheUserEntered,
  printName: printNameInsideObject,
}

var inaraInfo = {
  name: 'Inara',
  favouriteColour: 'Lellow',
  luckyNumbers: [],
}

function printNameInsideObject(greeting) {
  console.log(greeting + ', ' + this.name);
}

function printName(personInfo) {
  console.log(personInfo.name);
}

function printLuckyNumbers(personInfo) {
  console.log(personInfo.luckyNumbers.join(', '));
}

function addLuckyNumber(personInfo) {
  newNumber = Math.ceil(Math.random() * 100);
  personInfo.luckyNumbers.push(newNumber);
}

printName(niallInfo);
printLuckyNumbers(niallInfo);
