// let arr = [1,2,3,4,5]; // Task_1

// let arr2 = ["apple", "banana", "orange"]; // Task_2

// let arr3 = [
//     {name: "John"},
//     {name: "Alice"},
//     {name: "Bob"}
// ]; // Task_3

// let arr4 = Array.of("hello", "world", "javascript"); // Task_4

// let arr5 = [1,2,3,4,5];
// let firstElement = arr5[2]; // Task_5

// let arr6 = [1,2,3,4,5];
// let firstElement = arr6[0];
// let firstElement1 = arr.shift();
// let firstElement = arr6.at(0); // Task_6

// let arr7 = [1,2,3,4,5];
// let lastElement = arr7[arr7.length - 1];
// let lastElement = arr7.at(-1);
// let lastElement = arr7.pop(); // Task_7

let sum = [1,2,3,5];
let sumOfNumbers = 0;
for(let i = 0; i < sum.length; i++){
    sumOfNumbers += sum[i];
}
console.log(sumOfNumbers); //Task 1, Homework 10, part_2

function sumArrayWithValidation(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
     return ("Массив пуст или не является массивом");
    }
    let sum = 0;
    for (const number of numbers) {
     if (typeof number !== 'number') {
      return ("Элемент не является числом");
     }
     sum += number;
    }
    return sum;
}
const validNumbers = [1,2,3,4,5,6];
console.log(sumArrayWithValidation(validNumbers)); // Task 2, Homework 10, part_2