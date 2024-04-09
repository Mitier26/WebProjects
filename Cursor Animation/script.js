// 마우스의 위치에 i를 만든다.
// i 의 스타일을 만들어 준다.
// i 가 자동으로 사라지게 만든다.
// i 가 랜덤한 크기를 가지게 한다.
// i 가 랜덤한 방향으로 날아가게 한다.

function spark(event) {
    // i를 만든다.
    let i = document.createElement('i');

    // i의 초기 위치를 지정한다. event 는 마우스이동 이벤트
    i.style.left = event.pageX + 'px';
    i.style.top = event.pageY + 'px';

    // i 에 랜더한 크기를 가지게 한다.
    i.style.scale = `${Math.random() * 2 + 1}`;

    // i가 램덤한 방향으로 날아가게 한다.
    i.style.setProperty('--x', getRandomTransitionValue());
    i.style.setProperty('--y', getRandomTransitionValue());
    // setProperty를 이용해 style 에 var(--x) 로 값을 전달 한다.

    // i 를 body에 추가해 화면에 보이게 한다.
    document.body.appendChild(i);

    // 2초가 지나면 사라지게 한다.
    setTimeout(() => {
        document.body.removeChild(i);
    }, 2000);
}

// 랜덤함 값을 반환한다.
function getRandomTransitionValue() {
    return `${Math.random() * 400 - 200}px`;
}

document.addEventListener('mousemove', spark);
