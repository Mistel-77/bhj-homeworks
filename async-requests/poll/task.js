let title = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4 && this.status == 200) {
        var data = JSON.parse(this.responseText).data;
        console.log(data);

        title.innerHTML = data.title;
        for (var key in data.answers) {
            answers.innerHTML += `<button class="poll__answer">${data.answers[key]}</button> `
        };

        let buttons = document.querySelectorAll('.poll__answer');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
                window.location.reload();
            });
        }
    };
});