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
document.write(`Total cost to buy 5 tickets to a movie is ${fiveTickets} PKR <br><br><br>`);

// QUESTION 5


// QUESTION 6
// var celsius = prompt("Enter celsius:");
// var fahrenheit = (celsius * 9/5) + 32;

// document.write(`<h3>${celsius} °c is ${fahrenheit} °f</h3>`);

// var fahrenheit = prompt("Enter fahrenheit:");
// var celsius = (fahrenheit - 32) * 5 / 9;

// document.write(`<h3>${fahrenheit} °F is ${celsius} °C</h3>`);


// QUESTION 7
// var priceOfItem_1 = 650;
// var priceOfItem_2 = 100;

// var orderedQtyOfItem_1 = 3;
// var orderedQtyOfItem_2 = 7;

// var shippingCharges = 100;
// document.write(`Price of item 1 is: ${priceOfItem_1} <br/>`);
// document.write(`Quantity of item 1 is: ${orderedQtyOfItem_1} <br/>`);
// document.write(`Price of item 2 is: ${priceOfItem_2} <br/>`);
// document.write(`Quantity of item 2 is: ${orderedQtyOfItem_2} <br/>`);
// document.write(`Shipping charges: ${shippingCharges} <br/><br/>`);

// document.write("Total cost of your order is ", priceOfItem_1 * orderedQtyOfItem_1 + priceOfItem_2 * orderedQtyOfItem_2 + shippingCharges,);

// QUESTION 8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write(`<h1>Marks Sheet </h1>`)
document.write(`Total Marks: ${totalMarks} <br/> `);
document.write(`Marks obtained: ${marksObtained} <br/> `);
document.write(`Percentage: ${percentage} <br/><br/>`);

// QUESTION 9
var usDollar = 10;
var usToPKR = 104.80;
var saudiRiyal = 25;
var riyalToPKR = 28;
var totalPKR = (usDollar * usToPKR) + (saudiRiyal * riyalToPKR);
document.write("<h1>Currency in PKR</h1>")
document.write("Total Currency in PKR: " + totalPKR + "<br/>");
// var usDollar = prompt("Input dollar");
// var usToPKR = 104.80;
// var saudiRiyal = prompt("Input riyal");
// var riyalToPKR = 28;
// var totalPKR = (usDollar * usToPKR) + (saudiRiyal * riyalToPKR);
// alert(totalPKR);
// document.write("Total Currency in PKR: " + totalPKR);

// QUESTION 10
var randomNum = 10;
var result = (randomNum + 5) * 10 / 2;
document.write("<h1>Question No. 10</h1>" + "<p>Think a Number:</p>" + result); 

// QUESTION 11
var currentYear = 2024;
// var birthYear = prompt("your Birth year");
var birthYear = 2000
var calcAge = currentYear - birthYear;
// alert(calcAge);
document.write("<h1>Age Calculator</h1> <p>Current Year: " + currentYear + "</p><p>Birth Year: " + birthYear + "</p><p>Your age is : " + calcAge + "</p>" );

// QUESTION 12