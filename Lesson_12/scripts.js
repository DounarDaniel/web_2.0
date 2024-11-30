let arr = [1,2,3,4,5];
let result = arr.map(item => item * 2);
console.log(result);//1

let arr2 = [3,1,4,1,5,9,2,6];
let result1 = arr2.sort((a,b) => b-a);
console.log(result1);

let arr3 = ['hello','world'];
let result2 = arr3.reverse();
console.log(result2);

let str = 'apple,banana,cherry';
console.log(str.split(`,`).join('!!!'));
let arr4 = ['hello', 'world'];
let result3 = arr4.join(' ');
console.log(result3);

let arr5 = [1,2,3,4,5];
let result4 = arr5.reduce((sum, current) => sum + current, 20);
console.log(result4);
