document.addEventListener('DOMContentLoaded', () => {
    // DOMContentLoaded 이벤트는 문서의 구조가 완전히 로드된 후 실행됩니다.
    let container = document.querySelector('.container');

    // 30개의 화살표를 무작위 위치에 생성
    for (let i = 0; i < 30; i++) {
        let arrow = document.createElement("div"); // 새로운 div 요소를 생성
        arrow.classList.add("arrow"); // 클래스 'arrow' 추가
        // 화면의 무작위 위치에 배치
        arrow.style.top = `${Math.random() * 100}vh`;
        arrow.style.left = `${Math.random() * 100}vw`;
        container.appendChild(arrow); // container에 추가
    }

    // body 요소에 마우스 움직임 이벤트 리스너 추가
    document.querySelector('body').addEventListener("mousemove", rotation);

    function rotation(event) {
        // 모든 .arrow 요소를 선택
        let arw = document.querySelectorAll('.arrow');

        arw.forEach(function (arw) {
            // 각 화살표의 중심 좌표 계산
            let x = (arw.getBoundingClientRect().left) + (arw.clientWidth / 2);
            let y = (arw.getBoundingClientRect().top) + (arw.clientHeight / 2);

            // 마우스 좌표와 화살표 중심 좌표 사이의 각도 계산
            let radian = Math.atan2(event.pageX - x, event.pageY - y);
            let rot = (radian * (180 / Math.PI) * -1) + 270; // 라디안을 각도로 변환 후 조정
            arw.style.transform = "rotate(" + rot + "deg)"; // 화살표 회전
        });
    }
});
