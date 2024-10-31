// let user = {
//     name: "John",
//     surname: "Smith",
// };
// user.name = "Pete";
// delete user.name;
// alert(user.name);


// function isEmpty(object){
//     for(key in object){
//         if(object.hasOwnProperty(key)){
//             return false;
//     }
// }
// return true;
// }


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// function SumSalaries(salaries){
//     sum = 0;
//     for(let person in salaries){
//         if(salaries.hasOwnProperty(person)){
//             sum += salaries[person];
//     }
// }
// return sum;
// }
// let totalSalaries = SumSalaries(salaries);
// alert(totalSalaries);


function multiplyNumeric(Obj){
    for(let num in Obj){
        if(typeof Obj[num] == 'number'){
            Obj[num] *= 2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
console.log(menu);
