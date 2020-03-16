const tabButton = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));
let currentTab = 0;
let oldClass = tabButton[currentTab + 1].className;
let oldClassContent = tabContent[currentTab + 1].className;

function changeButton(event) {
    tabButton[currentTab].className = oldClass;
    tabContent[currentTab].className = oldClassContent;
    event.target.className = oldClass + " tab_active";
    currentTab = tabButton.indexOf(event.target);
    tabContent[currentTab].className = oldClassContent + " tab__content_active";
}

for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].addEventListener('click', changeButton);
}