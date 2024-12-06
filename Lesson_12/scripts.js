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


let map = new Map([
    [1, "Ivan"],
    [2, "Aleksey"],
    [3, "Misha"]
]);
for(let amount of map.values()){
    console.log(amount);
}
let result5 = map.delete(1);
let result6 = map.has(1);
console.log(result6);
for (const value of map.values()){
    console.log(value);
}// Task_1


let set = new Set();
set.add(1, "Зима");
set.add(2, "Весна");
set.add(3, "Лето");
set.add(4, "Осень");
let result7 = set.delete(1);
let result8 = set.has(2);
console.log(result8);
for (const value of set){
    console.log(value);
}