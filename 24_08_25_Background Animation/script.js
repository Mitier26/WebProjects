let section = document.querySelector('section');

for (let i = 0; i < 600; i++) {
    let div = document.createElement('div');
    section.appendChild(div);
}

document.addEventListener('mousemove', function (e) {
    // e 에는 마우스의 정보가 있다.
    // mousemove 이기 때문에  e 에는 마우스 위치 정보가 있다.
    document.querySelectorAll('div').forEach(div => {
        // 모든 div를 돈다.
        let x = (div.offsetLeft) - e.pageX;
        // 각 상자의 왼쪽에서 마우스의 좌표 x 를 뺀다.
        // div.offsetLeft는 화면 전체에서 각 div의 왼쪽 위치
        // 각 div에서 마우스 위치와의 "거리"
        let y = (div.offsetTop) - e.pageY;

        let dist = Math.sqrt(x * x + y * y);
        // 실제 거리
        let score = Math.exp(dist * -0.01);
        // 거리에 따라 score 값이 감소한다.
        // 이 score를 이용해 크기를 결정한다.
        div.style.transform = "scale(" + score * 4 + ")";
    })
})