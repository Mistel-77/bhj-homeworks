const bookControlsFS = Array.from(document.getElementsByClassName('font-size'));
const bookControlsColor = Array.from(document.querySelectorAll('.book__control_color .color'));
const bookControlsBG = Array.from(document.querySelectorAll('.book__control_background .color'));
console.log(bookControlsColor);

function changeFS(event) {
    event.preventDefault();
    document.querySelector('.font-size_active').classList.remove('font-size_active');
    event.target.classList.add('font-size_active');

    if (event.target.dataset.size == 'small') {
        event.target.closest('#book').classList.remove('book_fs-big');
        event.target.closest('#book').classList.add('book_fs-small');
    } else if (event.target.dataset.size == 'big') {
        event.target.closest('#book').classList.remove('book_fs-small');
        event.target.closest('#book').classList.add('book_fs-big');
    } else {
        event.target.closest('#book').classList.remove('book_fs-small');
        event.target.closest('#book').classList.remove('book_fs-big');
    }
}

function changeColor(event) {
    event.preventDefault();
    document.querySelector('.book__control_color .color_active').classList.remove('color_active');
    event.target.classList.add('color_active');

    if (event.target.dataset.color == 'gray') {
        event.target.closest('#book').classList.remove('book_color-whitesmoke');
        event.target.closest('#book').classList.add('book_color-gray');
    } else if (event.target.dataset.color == 'whitesmoke') {
        event.target.closest('#book').classList.remove('book_color-gray');
        event.target.closest('#book').classList.add('book_color-whitesmoke');
    } else {
        event.target.closest('#book').classList.remove('book_color-gray');
        event.target.closest('#book').classList.remove('book_color-whitesmoke');
    }
}

function changeBG(event) {
    event.preventDefault();
    document.querySelector('.book__control_background .color_active').classList.remove('color_active');
    event.target.classList.add('color_active');

    if (event.target.dataset.color == 'black') {
        event.target.closest('#book').classList.remove('book_bg-gray');
        event.target.closest('#book').classList.add('book_bg-black');
    } else if (event.target.dataset.color == 'gray') {
        event.target.closest('#book').classList.remove('book_bg-black');
        event.target.closest('#book').classList.add('book_bg-gray');
    } else {
        event.target.closest('#book').classList.remove('book_bg-gray');
        event.target.closest('#book').classList.remove('book_bg-black');
    }
}

for (let i = 0; i < bookControlsFS.length; i++) {
    bookControlsFS[i].addEventListener('click', changeFS);
}

for (let i = 0; i < bookControlsColor.length; i++) {
    bookControlsColor[i].addEventListener('click', changeColor);
}

for (let i = 0; i < bookControlsBG.length; i++) {
    bookControlsBG[i].addEventListener('click', changeBG);
}