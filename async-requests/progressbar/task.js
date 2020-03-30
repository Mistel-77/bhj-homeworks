let progress = document.getElementById('progress');
let form = document.getElementById('form');
var formData = new FormData(form);
let xhr = new XMLHttpRequest();

form.addEventListener('submit', event => {

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.onprogress = function(event) {
        progress.value = event.loaded / 1000000;
    };

    xhr.send(formData);
    event.preventDefault();
});