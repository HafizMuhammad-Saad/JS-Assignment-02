// var char = prompt("Enter a chrachter: ");
// var asciicode = char.charCodeAt(0);

// if (asciiCode >= 48 && asciiCode <= 57) {
//     document.write("The character is a number.")
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//     document.write("The character is an uppercase letter.")
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//     document.write("The character is a lowercase letter.")
// } else {
//     document.write("The character is not a number or letter.")
// };

// 1. Character input lo
// var char = prompt("Enter a character:");

// // 2. ASCII code find karo
// var asciiCode = char.charCodeAt(0);

// // 3. Check karo ki character kya hai
// if (asciiCode >= 48 && asciiCode <= 57) {
//     document.write("The character is a number.");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//     document.write("The character is an uppercase letter.");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//     document.write("The character is a lowercase letter.");
// } else {
//     document.write("The character is not a number or letter.");
// }

var num1 = parseInt(prompt("Enter the first Integer:"))
var num2 = parseInt(prompt("Enter the second Integer:"))

if (num1 > num2) {
    document.write("The larger number is" + num1);
} else if (num2 > num1) {
    document.write("The larger number is" + num2);

} else {
    document.write("Both numbers are Equal.");
}
