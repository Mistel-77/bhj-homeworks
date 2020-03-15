let button = document.querySelector(".dropdown__value");
let dropItem = Array.from(document.querySelectorAll(".dropdown__item"));

//console.log(text);
function clickButton() {
    if (button.parentElement.querySelector(".dropdown__list_active")) {
        button.parentElement.querySelector(".dropdown__list").className = "dropdown__list"
    } else {
        button.parentElement.querySelector(".dropdown__list").className = "dropdown__list dropdown__list_active"
    } 
}

function changeButton(event) {
    event.preventDefault();
    clickButton();
    button.textContent = event.target.textContent;
}
button.addEventListener('click', clickButton);

for (let i = 0; i < dropItem.length; i++) {
    dropItem[i].addEventListener('click', changeButton);
}