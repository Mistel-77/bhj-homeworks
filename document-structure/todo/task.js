const button = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
const tasks_list = document.getElementById('tasks__list');

function toDo() {
    let html = `<div class="task">
         <div class="task__title">
              ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;
    tasks_list.insertAdjacentHTML('beforeEnd', html);
    tasks_list.lastElementChild.querySelector('.task__remove').addEventListener('click', (event) => {
        event.target.closest('.task').remove();
    });
    input.value = '';
}

input.addEventListener('keydown', (event) => {
    if(event.key == "Enter" && input.value != '') {
        toDo();
    }  
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    if(input.value != '') {
        toDo();
    }  
});
