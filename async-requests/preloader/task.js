let loader = document.getElementById('loader');
let item = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && this.status == 200) {
        loader.classList.remove('loader_active');

        var data = JSON.parse(this.responseText).response.Valute;
        console.log(data);
        for (var key in data) {
            items.innerHTML += `<div class="item">
                <div class="item__code">${data[key].CharCode}</div>
                <div class="item__value">${data[key].Value}</div>
                <div class="item__currency">руб.</div>
            </div>`
        };
    };
};