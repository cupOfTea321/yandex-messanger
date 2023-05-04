console.log('Hello world!');
import ava from './assets/Ellipse 19.png'

const items = [
    {name: 'Андрей', you: false, message: 'Изображение', time: '10:49', newMessage: 2},
    {name: 'Киноклуб', you: true, message: 'стикер', time: '10:49', newMessage: false},
    {
        name: 'Илья',
        you: false,
        message: 'Друзья, у меня для вас особенный выпуск новостей!',
        time: '15:12',
        newMessage: 4
    },
];

const componentItems = items.map(item => {
    console.log(item)
    return `
    <hr>
                <div class="dialogs-item">
                    <div class="dialogs-item__left">
                        <img class="dialogs-item__ava" src={ava} alt="photo">
                        <div>
                            <p class="user__name">${item.name}</p>
                            ${item.you ? `<p class="user__message">Вы: ${item.message}</p>` : `<p class="user__message">${item.message}</p>`}
                        </div>

                    </div>

                    <div>
                        <p class="dialogs-item__time">${item.time}</p>
                        ${item.newMessage ? `<p class="dialogs-item__new">${item.newMessage}</p>` : `<p></p>`}
                        
                    </div>
                </div>
    `;
});

document.getElementById('chat-search__dialogs').innerHTML = componentItems.join('');
