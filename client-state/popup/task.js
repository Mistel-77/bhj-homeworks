const modal = document.querySelector('.modal');
const close = document.querySelector('.modal .modal__close');

let cookie = document.cookie;

window.addEventListener('load', () => {
    if (!cookie) {
        modal.classList.add('modal_active');
    }
    close.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        document.cookie = "close=true";
    });
});
