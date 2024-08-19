
let todoTitle = document.getElementById('todo-title');
let todoImport = document.getElementById('todo-import');
let todoDate = document.getElementById('todo-date');
let addBtn = document.getElementById('add-btn');

const todoHolder = document.querySelector('.todo-holder');
const emptyMessage = document.getElementById('empty-message');

todoDate.value = new Date().toISOString().slice(0, 16);

// 알림창
Notification.requestPermission();


window.onload = function () {

    let todoList = jsonToList();

    if (todoList != null) showTodoItems(todoList);
    else todoList = [];

    addBtn.addEventListener("click", () => {
        const todo = {
            "title": todoTitle.value,
            "imp": todoImport.value,
            "todoDate": todoDate.value
        }

        console.log(todoTitle.value);

        todoTitle.value2 = '';
        todoList.push(todo);

        localStorage.setItem('todoList', JSON.stringify(todoList));

        showTodoItems(todoList);
    });

}

// 저장소에서 list를 가지고 오는 함수
function jsonToList() {
    const todoS = localStorage.getItem('todoList');
    return JSON.parse(todoS);
}

function showTodoItems(todoList) {

    // 기존의 할 일 목록을 초기화
    todoHolder.innerHTML = '';

    if (todoList.length === 0) {
        // 할 일이 없을 경우 메시지 표시
        emptyMessage.style.display = 'block';
    } else {
        // 할 일이 있을 경우 메시지 숨김
        emptyMessage.style.display = 'none';
    }

    const todoS = localStorage.getItem('todoList');
    let todoArray = JSON.parse(todoS);

    // 할 일 목록을 하나씩 추가
    todoArray.forEach((todo, index) => {
        // 새로운 todo-list div 생성
        const todoListDiv = document.createElement('div');
        todoListDiv.classList.add('todo-list');

        // todo-area div 생성
        const todoAreaDiv = document.createElement('div');
        todoAreaDiv.classList.add('todo-area');

        // todo-a div와 checkbox, title 생성
        const todoADiv = document.createElement('div');
        todoADiv.classList.add('todo-a');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('check');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('todo-title');
        titleDiv.innerText = todo.title;

        // todo-a 내부에 checkbox와 title 추가
        todoADiv.appendChild(checkbox);
        todoADiv.appendChild(titleDiv);

        // todo-info div 생성
        const todoInfoDiv = document.createElement('div');
        todoInfoDiv.classList.add('todo-info');

        // 시간 출력
        const dateDiv = document.createElement('input');
        dateDiv.type = 'datetime-local';
        dateDiv.classList.add('todo-date');
        dateDiv.value = todo.todoDate;
        dateDiv.disabled = true;

        const importDiv = document.createElement('div');
        importDiv.classList.add('todo-import');
        importDiv.innerText = todo.imp;

        // todo-info 내부에 date와 import 추가
        todoInfoDiv.appendChild(dateDiv);
        todoInfoDiv.appendChild(importDiv);

        // todo-area에 todo-a와 todo-info 추가
        todoAreaDiv.appendChild(todoADiv);
        todoAreaDiv.appendChild(todoInfoDiv);

        // todo-controller 생성 (수정, 삭제 버튼)
        const todoControllerDiv = document.createElement('div');
        todoControllerDiv.classList.add('todo-controller');

        const editButton = document.createElement('button');
        editButton.innerText = '수정';

        const deleteButton = document.createElement('button');
        deleteButton.innerText = '삭제';

        // 삭제 버튼에 클릭 이벤트 추가
        deleteButton.addEventListener('click', () => {
            if (confirm(`${todoList[index].title}을 삭제하시겠습니까?`)) {
                showNotification(todoList[index].title);
                todoList.splice(index, 1);
                localStorage.setItem('todoList', JSON.stringify(todoList));
                showTodoItems(todoList);
            }
        });

        // todo-controller에 버튼 추가
        todoControllerDiv.appendChild(editButton);
        todoControllerDiv.appendChild(deleteButton);

        // todo-list에 todo-area와 todo-controller 추가
        todoListDiv.appendChild(todoAreaDiv);
        todoListDiv.appendChild(todoControllerDiv);

        // todo-holder에 새로 만든 todo-list 추가
        todoHolder.appendChild(todoListDiv);
    });
}

// 알림 출력 함수
function showNotification(msg) {
    const notification = new Notification("목록을 삭제", { body: msg });

    setTimeout(function () {
        notification.close();
    }, 2000)
}