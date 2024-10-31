// let user = {
//     name: "John",
//     surname: "Smith",
// };
// user.name = "Pete";
// delete user.name;
// alert(user.name);

function isEmpty(object){
    for(key in object){
        if(object.hasOwnProperty(key)){
            return false;
    }
}
return true;
}