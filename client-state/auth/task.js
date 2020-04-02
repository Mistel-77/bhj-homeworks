let signin = document.getElementById('signin');
let welcome = document.getElementById('welcome');
let button = document.getElementById('signin__btn');
let signinForm = document.getElementById('signin__form');
let user_id = document.getElementById('user_id');
let exit = document.getElementById('exit__btn');

//localStorage.clear();

if (localStorage.id) {
    welcome.classList.add('welcome_active');
    user_id.innerText = localStorage.getItem('id');
} else {
    signin.classList.add('signin_active');
}

button.addEventListener('click', (event) => {
	event.preventDefault();
	submitForm();
});

exit.addEventListener('click', (event) => {
	event.preventDefault();
    localStorage.removeItem('id');
    window.location.reload();
});

function submitForm() {
    let xhr = new XMLHttpRequest();
    let formData = new FormData(document.forms.signin__form);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
            let user = JSON.parse(xhr.responseText);
            console.log(user);

            if (user.success) {
                localStorage.setItem('id', user.user_id);
                user_id.innerText = user.user_id;
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
            } else {
                alert('Неверный логин/пароль');
            }
        };
    };

};