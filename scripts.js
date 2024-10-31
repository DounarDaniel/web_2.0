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


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
function SumSalaries(salaries){
    sum = 0;
    for(let person in salaries){
        if(salaries.hasOwnProperty(person)){
            sum += salaries[person];
    }
}
return sum;
}
let totalSalaries = SumSalaries(salaries);
alert(totalSalaries);