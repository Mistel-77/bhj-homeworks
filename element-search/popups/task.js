const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalMainClose = modalMain.querySelector(".modal__close");
const modalSuccessClose = modalSuccess.querySelector(".modal__close");

let oldClassMain = modalMain.className;
let oldClassSuccess = modalSuccess.className;


function openModalMain() {
    modalMain.className = oldClassMain + " modal_active";
}

modalMainClose.onclick = function() {
    modalMain.className = oldClassMain;
}

modalMain.querySelector(".show-success").onclick = function() {
    modalMain.className = oldClassMain;
    modalSuccess.className = oldClassSuccess + " modal_active";
}

modalSuccessClose.onclick = function() {
    modalSuccess.className = oldClassSuccess;
}





openModalMain();
