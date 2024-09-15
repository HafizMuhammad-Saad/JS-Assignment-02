// QUESTION 1
var num1 = 30, num2 = 50;
var numNew = num1 + num2;
document.write(`<p>Sum of ${num1} and ${num2} is ${numNew}</p><br/>`);
// document.write("Sum of " + num1 + " and " + num2 + " is " + numNew );

// QUESTION 2
var num1 = 100, num2 = 50;
var numNew = num1 - num2;
document.write(`<p>Subtract ${num1} from ${num2} is ${numNew}</p>`);

var num1 = 40, num2 = 10;
var numNew = num1 * num2;
document.write(`<p>Multiply ${num1} from ${num2} is ${numNew}</p>`);

var num1 = 1400, num2 = 5;
var numNew = num1 / num2;
document.write(`<p>${num1} divided by ${num2} is ${numNew}</p>`);

var num1 = 100, num2 = 90;
var numNew = num1 % num2;
document.write(`<p>Modulus ${num1} of ${num2} is ${numNew}</p><br/>`);

// QUESTION 3
var newVariable;
document.write(`<p>Value after variable declaration is: ${newVariable}</p>`);
newVariable = 5;
document.write(`<p>Initial value: ${newVariable}</p>`);
newVariable++;
document.write(`<p>Value after increament is: ${newVariable}</p>`);
newVariable += 7;
document.write(`<p>Value after addition is: ${newVariable}</p>`);
newVariable--;
document.write(`<h3>Value after decreament is: ${newVariable}</p>`);
var reminder = newVariable % 3;
document.write(`<p>The reminder is: ${reminder}</p>`);

// QUESTION 4
var oneTicket = 600, fiveTickets = oneTicket * 5;
document.write(`Total cost to buy 5 tickets to a movie is ${fiveTickets} PKR <br><br><br>`);

// QUESTION 5

let tableOf = Number(prompt("Enter a Number ")) 
document.write(`<h1>Table of ${tableOf} </h1> `);

let multiplyBy = 10;


for (let i = 1; i <= multiplyBy; i++) {
    let result = tableOf * i;
    document.write(`<p>${tableOf} x ${i} = ${result} </p>`);
    
}


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
document.write("<h1>Question No. 10</h1>" + "<p>Think a Number: I'll calculate</p>" + result); 

// QUESTION 11
var currentYear = 2024;
// var birthYear = prompt("your Birth year");
var birthYear = 2000
var calcAge = currentYear - birthYear;
// alert(calcAge);
document.write("<h1>Age Calculator</h1> <p>Current Year: " + currentYear + "</p><p>Birth Year: " + birthYear + "</p><p>Your age is : " + calcAge + "</p>" );

// QUESTION 12
// let radius = Number(prompt("radius"));
let radius = 20;
let PI = 3.142;
let circumference = 2 * PI * radius;
let area = PI * radius ** 2;


document.write(`<h1>The Geometrizer </h1>`)
document.write(`<p>Radius of a circle is: ${radius} </p>`)
document.write(`<p>The circumference is: ${circumference} </p>`)
document.write(`<p>The area is: ${area} </p>`)

// QUESTION 13
let fvrt = "Ice cream";
let age = 22;
let maxAge = 60;
let perday = 2;
let total = perday * maxAge - perday * age;
document.write(`<h1>The Lifetime Supply Calculator </h1> `) 
document.write(`<p>Favorite thing: ${fvrt} </p> `) 
document.write(`<p>Current age: ${age} </p> `) 
document.write(`<p>Estimated maximum age: ${maxAge} </p> `) 
document.write(`<p>Amount of snacks per day: ${perday} </p> `) 
document.write(`<p>You will need ${total} to last you until the ripe old age of ${maxAge} </p> `) 