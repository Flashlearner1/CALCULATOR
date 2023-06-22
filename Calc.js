const prompt = require("prompt-sync")({sigint: true});

let result;

const operator = prompt('Enter your operator( either +, -, * or /)');

const number = parseFloat(prompt("Enter Number: "));
const number1 = parseFloat(prompt("Enter Number1: "));

switch(operator) {
    case '+' : 
    result = number + number1
    console.log(`${number} + ${number1} = ${result}`);
    break;

    case '-' : 
    result = number - number1
    console.log(`${number} - ${number1}= ${result}`);
    break;

    case '*' : 
    result = number * number1
    console.log(`${number} * ${number1}= ${result}`);
    break;

    case '/' : 
    result = number / number1
    console.log(`${number} / ${number1}= ${result}`);
    break;

    default : {
        console.log(invalid)
    }
}