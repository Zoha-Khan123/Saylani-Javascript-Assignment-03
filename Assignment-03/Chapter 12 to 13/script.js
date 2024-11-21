// ======================= IF / ELSE IF /ELSE ======================


// QUESTION NO 1
// function checkCharacter(input) {
//     let char = input.charCodeAt(0); 
//     if (char >= 48 && char <= 57) { 
//         console.log(`${input} is a number (0=48, 9=57)`);
//     } else if (char >= 65 && char <= 90) { 
//         console.log(`${input} is an uppercase letter (A=65, Z=90)`);
//     } else if (char >= 97 && char <= 122) { 
//         console.log(`${input} is a lowercase letter (a=97, z=122)`);
//     } else {
//         console.log(`${input} is not a number or an alphabet character`);
//     }
// }
// checkCharacter("A");
// checkCharacter("a"); 
// checkCharacter("5");
// checkCharacter("#"); 
 

// QUETION NO 2
// function campareIntergers (num1, num2)  {
//  if (num1 > num2) {
//     console.log(`The larger number is: ${num1}`);
// } else if (num2 > num1) {
//     console.log(`The larger number is: ${num2}`);
// } else {
//     console.log("Both numbers are equal ");
//   }
// }
// let firstNumber =  parseInt(prompt("Enter a first integer"));
// let secondNumber = parseInt(prompt("Enter a second integer"));
// campareIntergers(firstNumber,secondNumber);

// QUESTION NO 3
// let number = prompt("Enter a number:");
// number = parseFloat(number);

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }


// QUESTION NO 4
// function isVowel (char) {
//     let lowerChar = char.toLowerCase();
//     if (lowerChar ==='a' || lowerChar === 'e' || lowerChar ==='i' || lowerChar ==='o' || lowerChar ==='u'){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isVowel('a'));//true
// console.log(isVowel('p'));//false
// console.log(isVowel('u'));//true


// QUESTION NO 5
// let correctPassword = "mySecretPassword123";

// let userPassword = prompt("Please enter your password:");

// if (!userPassword) {
//   console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
//   console.log("Correct! The password you entered matches the original password");
// } else {
//   console.log("Incorrect password");
// }


// QUESTION NO 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// QUESTION NO 7
// function convertTimeTo12HourFormat(time) {
//     let hour = parseInt(time.substring(0, 2));
//     let minute = time.substring(2, 4);
//     let period = "AM";

//     if (hour >= 12) {
//         period = "PM";
//         if (hour > 12) {
//             hour -= 12;
//         }
//     } else if (hour === 0) {
//         hour = 12; 
//     }
//     return hour + ":" + minute + " " + period;
// }
// let time = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");
// if (time.length !== 4 || isNaN(time)) {
//     alert("Please enter a valid 4-digit time in 24-hour format (HHMM).");
// } else {
//     let convertedTime = convertTimeTo12HourFormat(time);
//     alert("The time in 12-hour format is: " + convertedTime);
// }
