const fs = require('fs');

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function checkEvenOrOdd(number) {
  return number % 2 === 0 ? 'even' : 'odd';
}

const randomNumber = generateRandomNumber();
const result = checkEvenOrOdd(randomNumber);

console.log(`Random number: ${randomNumber}\nThe number is ${result}.`);

fs.writeFile('result.txt', `Random number: ${randomNumber}\nThe number is ${result}.`, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Result written to result.txt');
  }
});