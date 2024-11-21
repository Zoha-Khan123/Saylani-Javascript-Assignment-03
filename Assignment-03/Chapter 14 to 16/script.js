//===================== ARRAY ================================

// QUESTION NO 01
const emptyArray = [];

// QUESTION NO 02
const emptyArray2 = [];

// QUESTION NO 03
const stringArray = ["Mango", "Apple", "Banana", "Grapes"];

// QUESTION NO 04
const numberArray = [1, 2, 3, 4, 5];

// QUESTION NO 05
const booleanArray = [true, false];

// QUESTION NO 06
const mixedArray = ["Mango", 1, true];





// QUESTION NO 07
// const educationQualifications = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M.Phill",
//   "PHD",
// ];
// document.write(`Qualifications:`);

// for (let i = 0; i < educationQualifications.length; i++) {
//   document.write(`${i + 1} ${educationQualifications[i]}`);
// }





// QUESTION NO 08
// const studentNames = ["Zoha","Noor","Meerub"];
// const scoreOfStudents = [50,80,70];
// const totalMarks = 500;

// for (let i=0; i<studentNames.length; i++){
//     const percentage = (scoreOfStudents[i]/totalMarks)*100
//     document.write(`Score of ${studentNames[i]} is ${scoreOfStudents[i]}. Percentage is: ${percentage.toFixed(2)}%`);
// }





// QUESTION NO 09
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// document.write(colorNames);





// QUESTION NO 09 (a)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const userColor = prompt("What color you want to add at the begining?")
// const userColorAddBegining = colorNames.unshift(userColor);
// document.write(colorNames);





// QUESTION NO 09 (b)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const userColor = prompt("What color you want to add at the end?")
// const userColorAddEnd = colorNames.push(userColor);
// document.write(colorNames);





// QUESTION NO 09 (c)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const userColor1 = prompt("Enter the first color to add at the beginning:");
// const userColor2 = prompt("Enter the second color to add at the beginning:");
// colorNames.unshift(userColor2, userColor1);
// document.write("Updated Colors: " + colorNames.join(", "));





// QUESTION NO 09 (d)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const DeleteFirstColor = colorNames.shift();
// document.write("Updated Colors: " + colorNames);





// QUESTION NO 09 (e)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const DeleteLastColor = colorNames.pop();
// document.write("Updated Colors: " + colorNames);





// QUESTION NO 09 (f)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const userIndexNo = prompt(` ${colorNames} \n Which index you want to add a color? \n "Note: Index no starting from 0"`)
// const userColorName = prompt("Which color you want to add?");
// colorNames.splice(userIndexNo,0,userColorName);
// document.write(`Updated Array: ${colorNames}`);





// QUESTION NO 09 (g)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const userIndexNo = prompt(` ${colorNames} \n Which index you want to delete a color? \n "Note: Index no starting from 0"`)
// const deleteColors = prompt("How many colors you want to delete?");
// colorNames.splice(userIndexNo,deleteColors);
// document.write(`Updated Array: ${colorNames}`);





// QUESTION NO 10
// const studentScores = [320,230,480,120];
// studentScores.sort((a, b) => a - b);
// document.write(`Scores of student ${studentScores} <br> Ordered scores of student ${studentScores} `)





// QUESTION NO 11
// const cityNames = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// const selectedCityNames = cityNames.slice(2,4)
// document.write(`Cities List: <br> ${cityNames} <br> Selected Cities List: ${selectedCityNames}`)





// QUESTION NO 12
// const arr = ["This","is","my","cat"];
// const arrIntoString = arr.join(" ")
// document.write(`Array: ${arr} <br> String:${arrIntoString}`)





// QUESTION NO 13
// const devices = ["Keyboard","Mouse","Printer","Monitor"];
// const array = []

// //add one by one
// for (let i=0; i<devices.length; i++){
//     array.push(devices[i]);
// }
// document.write(`Devices: ${array}`)

// //remove one by one in begining
// while(devices.length>0){
//     document.write(`<br> 0UT: ${devices.shift()}`)
// }





// QUESTION NO 14
// const devices = ["Keyboard","Mouse","Printer","Monitor"];
// const array = []

// //add one by one
// for (let i=0; i<devices.length; i++){
//     array.push(devices[i]);
// }
// document.write(`Devices: ${array}`)

// //remove one by one in last
// while(devices.length>0){
//     document.write(`<br> 0UT: ${devices.pop()}`)
// }





// QUESTION NO 15
// Array of phone manufacturers
// const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Start creating the dropdown menu
// let dropdown = '<select>';

// // Add each manufacturer as an option in the dropdown
// for (let manufacturer of phoneManufacturers) {
//     dropdown += `<option value="${manufacturer}">${manufacturer}</option>`;
// }

// // Close the dropdown menu
// dropdown += '</select>';

// // Display the dropdown in the browser
// document.write(dropdown);
