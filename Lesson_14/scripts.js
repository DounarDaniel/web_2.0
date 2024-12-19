// let width = window.innerWidth;
// console.log(width);

// let height = window.innerHeight;
// console.log(height);

// window.resizeTo(height*2, width*2);
// let userAgent = navigator.userAgent;
// console.log(userAgent);

// let language = navigator.language;
// console.log(language);

// let platform = navigator.platform;
// console.log(platform);

// let currentURL = location.href;
// console.log(currentURL);

// let protocol = location.protocol;
// console.log(protocol);

// let hostname = location.hostname;
// console.log(hostname);

// document.body.style.background = 'green';


console.log(document.body.firstElementChild);
console.log(document.body.children[0]); // Выводит div

console.log(document.body.childNodes[3]); // Выводит ul

console.log(document.body.children[1].lastElementChild); //Выводит последний li


let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.textContent = 'Нажми меня';
}); // Task_1


let container = document.querySelector('.container');
if (container) {
    container.classList.add(`active`);
} // Task_2


let parentElement = document.getElementById(`parent`);
if(parentElement){
    let quantity = parentElement.querySelectorAll('*');
  console.log('Количество потомков:', quantity.length);
} else {
  console.error('Элемент с id "parent" не найден.');
}// Task_3
