// let name = "John";
// function sayHi() {
// alert("Hi, " + name);
// }
// name = "Pete";
// sayHi(); // будет показано Pete; Task_1


// let phrase = "Hello";
// if (true) {
// let user = "John";
// function sayHi() {
// alert(`${phrase}, ${user}`);
// }
// }
// sayHi(); // Hello, John; Task_2


// function makeCounter() {
//     let count = 0;
//     return function() {
//     return count++;
//     };
//     }
//     let counter = makeCounter();
//     let counter2 = makeCounter();
//     alert( counter() ); // 0
//     alert( counter() ); // 1
//     alert( counter2() ); // 0
//     alert( counter2() ); // 1; Task_3


// const sum = a => b => a + b;
// console.log(sum(1)(2)) // Task_4


const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
console.log(`Today: ${day}`);// Task_1


const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');
console.log(`Right now: ${hours}:${minutes}:${seconds}`);// Task_2


const currentDate2 = new Date();
const year2 = currentDate.getFullYear();
const month2 = String(currentDate.getMonth() + 1).padStart(2, '0');
const day2 = String(currentDate.getDate()).padStart(2, '0');
const hours2 = String(currentDate.getHours()).padStart(2, '0');
const minutes2 = String(currentDate.getMinutes()).padStart(2, '0');
const seconds2 = String(currentDate.getSeconds()).padStart(2, '0');
console.log(`Today: ${year2}-${month2}-${day2}
${hours2}:${minutes2}:${seconds2}`);// Task_3


const date1 = new Date(2022, 0, 1);
const date2 = new Date();
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays);


const date3 = new Date(2022, 0, 1);
const date4 = new Date();
const diffTime1 = Math.abs(date3 - date4);
const diffDays1 = Math.ceil(diffTime1 / (1000 * 60 * 60));
console.log(diffDays1);

