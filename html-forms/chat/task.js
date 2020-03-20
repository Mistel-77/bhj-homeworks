const widget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
let robotMessages = ['Вы еще не купили ни одного товара', 'Добрый день! До свидания!', 'Где ваша совесть?', 'Мы ничего не будем вам продавать', 'К сожалению, все операторы сейчас заняты', 'Кто тут?'];

function openWidget() {
    widget.classList.add('chat-widget_active');
}

function sendMessage(event) {
    if(event.key == "Enter" && chatInput.value != '') {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let rand = Math.floor(Math.random() * robotMessages.length);

        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${hours}:${minutes}</div>
            <div class="message__text">
                ${chatInput.value}
            </div>
        </div>
        `;
        chatInput.value = '';

        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${hours}:${minutes}</div>
            <div class="message__text">
                ${robotMessages[rand]}
            </div>
        </div>
        `;
    }

}

widget.addEventListener('click', openWidget);
chatInput.addEventListener('keydown', sendMessage);