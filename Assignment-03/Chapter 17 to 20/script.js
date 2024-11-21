//======================= ARRAY AND LOOPS ============================


// QUESTION NO 01
// const multiDimensionalArray = [[], [], []];
// document.write(multiDimensionalArray);




// QUESTION NO 02
// const multiDimensionalMatrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(`${multiDimensionalMatrix[0]} <br> ${multiDimensionalMatrix[1]} <br> ${multiDimensionalMatrix[2]}`)



// QUESTION NO 03
// for (let i=0; i<=10; i++){
//     console.log(i);
// }





// QUESTION NO 04
// const tableInput = prompt("Enter number to show its multiplication table");
// const lengthOfTable = prompt("Enter length multiplication table");
// document.write(`Multiplication table of ${tableInput} <br> Length ${lengthOfTable} <br>`)

// for(let i=1; i<=lengthOfTable; i++){
//     document.write(`${tableInput} X ${i} = ${tableInput * i} <br>`)
// }





// QUESTION NO 05
// const fruits = ["apple", "banana","mango", "orange","strawberry"]
// for(let i=0; i<=fruits.length; i++){
//     document.write(`Element at ${i} index is ${fruits[i]} <br>`)
// }






// QUESTION NO 06 (a)
// let counting = [];
// for (let i = 1; i <= 15; i++) {
//   counting.push(i) 
// }
// document.write(`Counting ${counting.join(",")} \n`);





// QUESTION NO 06 (b)
// let counting = [];
// for (let i = 1; i <= 15; i++) {
//   counting.push(i) 
// }
// document.write(`Reverse ${counting.reverse().join(",")} \n`);





// QUESTION NO 06 (c)
// const evenNumbers = [];
// for (let i = 1; i <= 15; i++) {
//     if(i % 2 === 0){
//         evenNumbers.push([i])
//     }
// }
// document.write(`Even ${evenNumbers.join(",")} \n`);





// QUESTION NO 06 (d)
// const oddNumbers = [];
// for (let i = 1; i <= 15; i++) {
//     if(i % 2 !== 0){
//         oddNumbers.push([i])
//     }
// }
// document.write(`Odd ${oddNumbers.join(",")} \n`);





// QUESTION NO 06 (e)
// const series = [];
// for (let i = 2; i <= 20; i += 2) { 
//     series.push(`${i}k`); 
// }
// document.write(`Series: ${series.join(", ")} \n`);





// QUESTION NO 07 
// const A = ["cake","applepie","cookie","chips", "patties"];
// const searchPrompt = prompt("Welcome to ABC Bakery.What do you order sir/ma'am");
// if(A.includes(searchPrompt)){
//     alert(`${searchPrompt} is available at index ${A.indexOf(searchPrompt)} in our bakery`);
// }else{
//     alert(`We are sorry ${searchPrompt} is not available in our bakery`);
// }






// QUESTION NO 08
// const largestNumber = [24, 53, 78, 91, 12]
// document.write(`The largest number is ${Math.max(...largestNumber)}`);





// QUESTION NO 09
// const smallestNumber = [24, 53, 78, 91, 12]
// document.write(`The smallest number is ${Math.min(...smallestNumber)}`);




// QUESTION NO 10
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) { 
//         console.log(i);
// }
// }