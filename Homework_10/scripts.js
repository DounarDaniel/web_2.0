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

// let sum = [1,2,3,5];
// let sumOfNumbers = 0;
// for(let i = 0; i < sum.length; i++){
//     sumOfNumbers += sum[i];
// }
// console.log(sumOfNumbers); //Task 1, Homework 10, part_2

// function sumArrayWithValidation(numbers) {
//     if (!Array.isArray(numbers) || numbers.length === 0) {
//      return ("Массив пуст или не является массивом");
//     }
//     let sum = 0;
//     for (const number of numbers) {
//      if (typeof number !== 'number') {
//       return ("Элемент не является числом");
//      }
//      sum += number;
//     }
//     return sum;
// }
// const validNumbers = [1,2,3,4,5,6];
// console.log(sumArrayWithValidation(validNumbers)); // Task 2, Homework 10, part_2

// let people = [
//     { name: 'John', age: 25, address: '123 Main St'},
//     { name: 'Jane', age: 17, address: '456 Elm St'},
//     { name: 'Bob', age: 30, address: '789 Oak St'},
//     { name: 'Alice', age: 22, address: 123},
//     { name: 'Mike', age: 35, address: '901 Maple St'}
// ];
// function NamesOfAdults(people){
//     const result = people.filter(person => person.age >= 18 && typeof person.address === 'string').map(person => person.name);
//     return result;

// }
// console.log(NamesOfAdults(people)); // Task 3, Homework 10, part_2
let Numbers = ["Daniel", "Nikita", "Gleb"];
function StringArray(Numbers){
    Numbers.push("Hello");
    return Numbers;
}
console.log(StringArray(Numbers)); // Task 1, Homework 10, part_3

