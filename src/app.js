console.log('Hello world!');

const items = ['Item 1', 'Item 2', 'Item 3'];

const componentItems = items.map(item => {
    return `
    <hr>
                <div class="chats_item">
                    <div class="chats_item_left">
                        <img class="user_chats_ava" src="assets/Ellipse%2019.png" alt="photo">
                        <div>
                            <p class="user_name">Андрей</p>
                            <p class="user_message">Изображение</p>
                        </div>

                    </div>

                    <div>
                        <p class="chat_time">10:49</p>
                        <p class="chat_new">2</p>
                    </div>
                </div>
    `;
});

document.getElementById('chats').innerHTML = componentItems.join('');
