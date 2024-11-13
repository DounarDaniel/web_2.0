let person = {
    name: 'Daniel',
    age: 15,
};
function greet(){
    alert("Hello, " + this.name);
}
person.Hello = greet;
person.Hello();
function haveBirthday(){
    alert(++this.age);
}
person.Young = haveBirthday;
person.Young();