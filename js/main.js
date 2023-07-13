// Q - 1
// var x = Number(window.prompt('enter number'));
// console.log(x);


// Q - 2
// var x = Number(window.prompt('enter number'));
// if (x % 3 == 0 && x % 4 == 0) {
//     console.log("yes");
// } else {
//     console.log("No");
// };


// Q - 3
// var x = Number(window.prompt('enter number'));
// var y = Number(window.prompt('enter number'));
// if (x > y) {
//     console.log(x);
// } else {
//     console.log(y);
// }


// Q - 4
// var x = Number(window.prompt('enter number'));
// if (x < 0) {
//     console.log("negative");
// } else {
//     console.log("positive");
// };


// Q - 5
// var x = Number(window.prompt('enter number'));
// var y = Number(window.prompt('enter number'));
// var z = Number(window.prompt('enter number'));
// if (x > y && x > z) {
//     console.log(x);
// } else if (y > x && y > z) {
//     console.log(y);
// } else if (z > x && z > y) {
//     console.log(z);
// };

// if (x < y && x < z) {
//     console.log(x);
// } else if (y < x && y < z) {
//     console.log(y);
// } else if (z < x && z < y) {
//     console.log(z);
// };


// Q - 6
// var x = Number(window.prompt('enter number'));
// if (x % 2 == 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }


// Q - 8
// var char = window.prompt('enter your char ');
// if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//     console.log("vowel");
// } else {
//     console.log("consonant");
// }


// Q - 9
// var x = Number(window.prompt('enter number'));
// for (var i = 1; i <= x; i++) {
//     console.log(i);
// }


// Q - 10
// var x = Number(window.prompt('enter number'));
// for (var i = 2; i <= 12; i++) {
//     console.log(i * x);
// }


// Q - 11
// var x = Number(window.prompt('enter number'));
// for (var i = 2; i <= x; i += 2) {
//     console.log(i);
// }


// Q - 12
// var x = Number(window.prompt('enter number'));
// var y = Number(window.prompt('enter number'));
// var z = 1
// for (var i = 0; i < y; i++) {
//     z *= x
// }
// console.log(z);


// Q - 12
// var total = 0;
// for (var i = 0; i < 5; i++) {
//     total += Number(window.prompt('enter mark sub' + (i + 1)));
// }
// console.log("total=" + total);
// console.log("avg=" + total / 5);
// console.log("pers=" + total / 500 * 100);


// Q - 13
// var monthNumber = Number(window.prompt('enter Month Number'));
// if (monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12) {
//     console.log('Days in Month: 31')
// } else if (monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11) {
//     console.log("Days in Month: 30")
// } else if (monthNumber == 2) {
//     console.log("Days in Month: 28")
// }


// Q - 14
// var physicsMark = Number(window.prompt("Enter mark of physics sub"));
// var chemistryMark = Number(window.prompt("Enter mark of Chemistry sub"));
// var biologyMark = Number(window.prompt("Enter mark of Biology sub"));
// var mathematicsMark = Number(window.prompt("Enter mark of Mathematics sub"));
// var computerMark = Number(window.prompt("Enter mark of Computer sub"));
// var pers = (physicsMark + chemistryMark + biologyMark + mathematicsMark + computerMark) / 500 * 100;
// if (pers >= 90) {
//     console.log("Grad A");
// } else if (pers >= 80) {
//     console.log("Grad B");
// } else if (pers >= 70) {
//     console.log("Grad C");
// } else if (pers >= 60) {
//     console.log("Grad D");
// } else if (pers >= 40) {
//     console.log("Grad E");
// } else if (pers < 40) {
//     console.log("Grad F");
// }


// Q - 15
// var monthNumber = window.prompt('enter Month Number');
// switch (monthNumber) {
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12":
//         console.log('Days in Month: 31');
//         break;
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//         console.log('Days in Month: 30');
//         break;
//     case "2":
//         console.log('Days in Month: 28');
//         break;
// }


// Q - 16
// var char = window.prompt('enter your char ');
// switch (char) {
//     case "a":
//     case "e":
//     case "o":
//     case "u":
//     case "i":
//         console.log("vowel");
//         break;
//     default:
//         console.log("consonant");
//         break;
// }


// Q - 17
// var x = Number(window.prompt('enter number'));
// var y = Number(window.prompt('enter number'));
// switch (x > y) {
//     case true:
//         console.log(x);
//         break;

//     case false:
//         console.log(y);
//         break;
// }


// Q - 18
// var x = Number(window.prompt('enter number'));
// switch (x % 2 == 0) {
//     case true:
//         console.log("even");
//         break;

//     case false:
//         console.log("odd");
//         break;
// }


// Q - 19
// var x = Number(window.prompt("Enter number"));
// switch (x > 0) {
//     case true:
//         console.log("positive");
//         break;
//     case false:
//         switch (x == 0) {
//             case true:
//                 console.log("Zero");
//                 break;
//             case false:
//                 console.log("negative");
//                 break;
//         }
//         break;
// }


// Q - 20
// var x = Number(window.prompt("Enter first number"));
// var sign = window.prompt("Enter your sign");
// var y = Number(window.prompt("Enter sec number"));

// switch (sign) {
//     case "+":
//         console.log(x + y);
//         break;
//     case "-":
//         console.log(x - y);
//         break;
//     case "*":
//         console.log(x * y);
//         break;
//     case "/":
//         console.log(x / y);
//         break;
// }
