const editor = document.getElementById('editor');
const button = document.querySelector('.clear');

//let text = localStorage.getItem('textEditor');
editor.value = localStorage.getItem('textEditor');

editor.addEventListener('input', () => {
    localStorage.setItem('textEditor', editor.value);
    //localStorage.textEditor = editor.value;
});

button.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('textEditor');
});
