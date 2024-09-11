// QUESTION 1
var num1 = 30, num2 = 50;
var numNew = num1 + num2;
document.write(`<h3>Sum of ${num1} and ${num2} is ${numNew}</h3><br/>`);
// document.write("Sum of " + num1 + " and " + num2 + " is " + numNew );

// QUESTION 2
var num1 = 100, num2 = 50;
var numNew = num1 - num2;
document.write(`<h3>Subtract ${num1} from ${num2} is ${numNew}</h3>`);

var num1 = 40, num2 = 10;
var numNew = num1 * num2;
document.write(`<h3>Multiply ${num1} from ${num2} is ${numNew}</h3>`);

var num1 = 1400, num2 = 5;
var numNew = num1 / num2;
document.write(`<h3>${num1} divided by ${num2} is ${numNew}</h3>`);

var num1 = 100, num2 = 90;
var numNew = num1 % num2;
document.write(`<h3>Modulus ${num1} of ${num2} is ${numNew}</h3><br/>`);

// QUESTION 3
var newVariable;
document.write(`<h3>Value after variable declaration is: ${newVariable}</h3>`);
newVariable = 5;
document.write(`<h3>Initial value: ${newVariable}</h3>`);
newVariable++;
document.write(`<h3>Value after increament is: ${newVariable}</h3>`);
newVariable += 7;
document.write(`<h3>Value after addition is: ${newVariable}</h3>`);
newVariable--;
document.write(`<h3>Value after decreament is: ${newVariable}</h3>`);
var reminder = newVariable % 3;
document.write(`<h3>The reminder is: ${reminder}</h3>`);

// QUESTION 4
var oneTicket = 600, fiveTickets = oneTicket * 5;
document.write(`Total cost to buy 5 tickets to a movie is ${fiveTickets} PKR`);

