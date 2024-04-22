let container = document.querySelector(".container");
// 상자들을 배치할 부모를 가지고 온다.
let count = 1000;
// 만들 상자의 수

// 반복
for (let i = 0; i < count; i++) {
    let box = document.createElement('div');
    // 새로운 상자 div 를 만든다.
    box.classList = "box";
    // 상자에 class를 추가한다.
    container.appendChild(box);
    // 부모의 자식으로 추가한다.
}

let boxes = document.querySelectorAll('.box');
// 새로 만들어진 모든 박스를 가지고 온다.

for (let i = 0; i < boxes.length; i++) {
    // 마우스 오버 이벤트를 만든다.
    boxes[i].addEventListener('mouseover', (e) => {
        boxes[i].classList.add('active');
        // class 를 추가한다. 
        // css로 특정값을 보낼 때 사용한는 것
        // style.setProperty ('변수이름', 값);
        boxes[i].style.setProperty('--x', getRandomValue());
        boxes[i].style.setProperty('--y', getRandomValue());

        function getRandomValue() {
            return `${Math.random() * 2000 - 1000}px`;
        }

        // 램덤한 색을 표현하기 위한 부분
        // hue-rotate 를 이용한다.
        let angleValue = Math.random() * 360;
        boxes[i].style.filter = 'hue-rotate(' + angleValue + 'deg)';
    })
}

