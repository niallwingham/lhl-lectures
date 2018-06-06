var niall = {
  name: 'Niall',
  favouriteColour: 'yellow',
  // luckyNumbers: [3, Math.pow(2, 2), 62],
  luckyNumbers: generateLuckyNumbers(),
  address: {
    line1: '20 Collier St',
    apt: '310',
  },
  printName: standalonePrintNameFunction,
  addLuckyNumber: addLuckyNumber,
  printLuckyNumbers: printLuckyNumbers,
  printAddress: printAddress,
}

function generateLuckyNumbers() {
  return [Math.ceil(Math.random() * 100)]
}

var kevin = {
  name: 'Kevin',
  favouriteColour: 'red',
  luckyNumbers: [7, 8],
  address: {
    line1: '46 Spadina',
    apt: '4th Floor',
  },
  printName: standalonePrintNameFunction,
  addLuckyNumber: addLuckyNumber,
  printLuckyNumbers: printLuckyNumbers,
  printAddress: printAddress,
}

function standalonePrintNameFunction(label) {
  console.log(label + ':')
  console.log(this.name)
  console.log()
}

function printAddress() {
  console.log('Address: ')
  console.log(this.address.apt + ' - ' + this.address.line1 + '\n')
}

function addLuckyNumber() {
  var newLuckyNumber = Math.ceil(Math.random() * 100)
  this.luckyNumbers.push(newLuckyNumber)
}

function printLuckyNumbers() {
  console.log('Lucky Numbers:')
  console.log(this.luckyNumbers + '\n')
}

niall.printName('My Fancy Label')
niall.addLuckyNumber()
niall.printLuckyNumbers()
kevin.printName('Evil Twin')
