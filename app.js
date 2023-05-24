function toDoList() {

    const input = document.getElementById('userInput');
    const enterBtn = document.getElementById('enter');
    const ulElement = document.querySelector('.list');
    
    enterBtn.addEventListener('click', onEnter);

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            onEnter();
        }
    });

    function onEnter() {

        const dateTime = new Date();
        const days = dateTime.getDate();
        const months = dateTime.getMonth() + 1;
        const year = dateTime.getFullYear();
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();

        const createLiElement = document.createElement('li');
        createLiElement.textContent = input.value;

        const labelDate = document.createElement('label');
        labelDate.id = 'date';

        if (months > 9) {
            labelDate.textContent = `Date: ${days}-${months}-${year}`;
        } else {
            labelDate.textContent = `Date: ${days}-0${months}-${year}`;
        }

        const labelTime = document.createElement('label');
        labelTime.id = 'time';

        if (hours < 10) {
            labelTime.textContent = `Time: 0${hours}:${minutes}`;
        } else {
            labelTime.textContent = `Time: ${hours}:${minutes}`;

        }
        if (minutes < 10) {
            labelTime.textContent = `Time: ${hours}:0${minutes}`;
        } else {
            labelTime.textContent = `Time: ${hours}:${minutes}`;
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onDelete);

        if (input.value === '') {
            return;
        }

        createLiElement.appendChild(labelTime);
        createLiElement.appendChild(labelDate);
        createLiElement.appendChild(deleteBtn);
        ulElement.appendChild(createLiElement);

        input.value = '';

        function onDelete() {
            createLiElement.remove();
        }
    }
}
toDoList();