// let arr = [1,2,3,4,5];
// arr.splice(0, 1);
// arr.splice(arr.length, 0, 6);
// console.log(arr);// 1

// let arr1 = [1,2,3,4,5];
// let newArr = arr.slice(1, -1);
// console.log(newArr); // 2

// let arr2 = [7,8,9];
// let arr3 = [1,2,3,4,5,6];
// const array3 = arr3.concat(arr2);
// console.log(array3);// 3

// let arr4 = [1,2,3,4,5];
// arr4.forEach(a => console.log(a));//4

// let arr5 = [3,2,1,0,1,2,3];
// console.log( arr5.indexOf(3));
// console.log( arr5.lastIndexOf(3));//5

// let arr6 = [1,2,3,4,5,6,7,8];
// console.log(arr5.includes(3));// 6

// let arr7 = [1,2,3,4,5,6];
// let results = arr7.filter(item => item > 3);
// alert(results);//7

// let arr8 = [1,2,3,4,5,6];
// console.log(arr8.findIndex(a => a > 3));
// console.log(arr8.findLastIndex(a => a > 3));//8

// let arr9 = [1,2,3,4,5,6];
// let newArr1 = arr9.slice(arr8.findIndex(a => a > 3));
// console.log(newArr1);//9

let arr10 = [1,2,3,4,5];
let result = arr10.map(item => item * 2);
console.log(result); //1

let arr11 = [3,1,4,1,5,9,2,6];
arr11.sort((a, b) => a - b);
console.log(arr11);//2

let arr12 = ['hello', 'world'];
let result1 = arr12.reverse();
console.log(result1);//3

let str = 'apple,banana,cherry';
let result2 = str.split(', ');
for (let fruits of result2){
    alert(`${fruits}`);
}//4

let arr13 = ['hello', 'world'];
let result3 = arr13.join(' ');
console.log(result3);//5

let arr14 = [1,2,3,4,5];
let result4 = arr14.reduce((sum, current) => sum * current);
console.log(result4);//6