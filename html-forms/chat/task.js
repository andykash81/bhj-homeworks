botArray = [
    'Добрый день', 'Все операторы заняты', 'Перезвоните позже', 'До свидания', 'Спасибо за звонок',
    'Идите работать', 'Ложитесь спать', 'Покормите кота', 'Хватит баловаться'
];
const chatWidgetSide = document.querySelector('.chat-widget__side');
chatWidgetSide.addEventListener('click', (event) => {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
    event.preventDefault();
})
// 
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
input.addEventListener('change', () => {
    let time = new Date().getHours() + ":" + new Date().getMinutes();
    let wordIndex = Math.floor(Math.random() * 4);
    console.log(wordIndex)
    messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">${input.value}</div>
        </div>
        `;

    input.value = '';

    messages.innerHTML += `
        <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">${botArray[wordIndex]}</div>
        </div>
        `;
    
    messages.scrollIntoView(false);
})
