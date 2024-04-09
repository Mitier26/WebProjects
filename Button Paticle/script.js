let button = document.getElementById('button');

button.addEventListener('click', function () {
    // 50개의 i를 생성한다.
    for (let i = 0; i < 50; i++) {
        // i를 만들고 spark라고 만든다.
        let spark = document.createElement('i');

        // 스파트에 클레스를 추가한다.
        spark.classList.add('spark');

        // 랜덤한 이동 방향을 지정한다.
        const randomX = (Math.random() - 0.5) * window.innerWidth;
        const randomY = (Math.random() - 0.5) * window.innerHeight;

        // 스타일에 이동방향 값을 전달한다.
        spark.style.setProperty('--x', randomX + 'px');
        spark.style.setProperty('--y', randomY + 'px');

        // 스파크의 크기를 랜덤한 크기로 한다.
        const randomSize = Math.random() * 8 + 2;
        spark.style.width = randomSize + 'px';
        spark.style.height = randomSize + 'px';

        // 스파크의 생존 시간을 랜덤하게 만든다.
        const duration = Math.random() * 2 + 0.5;
        // 애니메이션도 js 에서 작성 할 수 있다.
        // duration 뒤에 s 를 빼먹지 말자
        spark.style.animation = `animate ${duration}s ease-out forwards`;

        document.body.appendChild(spark);

        setTimeout(function () {
            spark.remove();
        }, 2000);
    }
});
