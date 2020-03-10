const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");

function changeSizesPlus() {
    image.width = 400;
};

function changeSizesMinus() {
    image.width = 200;
};

function addClick() {
    clicker.textContent = Number(clicker.textContent) + 1;

    if(clicker.textContent % 2 == 1) {
        changeSizesPlus();
    } else {
        changeSizesMinus();
    }
}

image.onclick = addClick;
