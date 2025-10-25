let firstNumber = 10;
let secondNumber = 4;
let sum = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;
let mode = firstNumber % secondNumber;
let message = `First Number is: ${firstNumber}\nSecond Number is: ${secondNumber}\n\nSum is: ${sum}\nSubtraction is: ${sub}\nMultiplication is: ${mult}\nDivision is: ${div}\nModulus is: ${mode}`;

document.getElementsByTagName("h1")[0].innerHTML = message;
document.querySelector("p").innerHTML = message;
