document.getElementById(`button`).onclick = function(){
    document.getElementById(`text`).style.cssText = `display: none;`;
}// Task_1 in class


document.getElementById(`button2`).onclick = function(){
    document.getElementById(`button2`).style.cssText = `display: none;`;
}// Task_2 in class


button.addEventListener("click", () => alert("1"));// Сработает и выведется вторым
button.removeEventListener("click", () => alert("1")); // Не сработает
button.onclick = () => alert(2);// Сработает и выведется первым
// Task_3 in class