let body = document.querySelector('body');
let h2 = document.querySelector('h2');
body.addEventListener('click', function (event) {
    for (let i = 0; i < 50; i++) {
        let spark = document.createElement('i');

        spark.style.top = event.clientY - body.offsetTop + 'px';
        spark.style.left = event.clientX - body.offsetLeft + 'px';

        let randomX = ((Math.random() - 0.5) * window.innerWidth) / 1.5;
        let randomY = ((Math.random() - 0.5) * window.innerHeight) / 1.5;

        spark.style.setProperty('--x', randomX + 'px');
        spark.style.setProperty('--y', randomY + 'px');

        let randomSize = Math.random() * 30 + 2;
        spark.style.width = randomSize + 'px';
        spark.style.height = randomSize + 'px';

        let duration = Math.random() * 2 + 0.5;
        spark.style.animation = `animate ${duration}s ease-out forwards`;

        // 랜덤한 색을 만드는 방법
        // 16777215는 16진수로 표현할 수 있는 총 색상의 수
        // 그리고 16진수의 문자열로 변한하낟.
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        spark.style.background = randomColor;
        h2.style.color = randomColor;

        body.appendChild(spark);

        setTimeout(function () {
            spark.remove();
        }, 2000);
    }
});
