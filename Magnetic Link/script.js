let cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

let items = document.querySelectorAll('ul li').forEach((item) => {
    // e 는 이벤트 마우스가 움직이는 이벤트가 발생하면
    // e 는 마우스에 정보가 있다.
    item.addEventListener('mousemove', (e) => {
        // li 범위 안에서 마우스가 움직이면
        // 마우스의 현재 위치를 저장한다.
        let x = e.offsetX;
        let y = e.offsetY;

        // li 의 넓이와 높이를 가지고 온다.
        let itemWidth = item.clientWidth;
        let itemHeight = item.clientHeight;

        let transX = x - itemWidth;
        let transY = y - itemHeight;

        item.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
    });

    // 마우스가 li 범위를 벗어나면 초기위치로 돌아 간다.
    item.addEventListener('mouseout', (e) => {
        item.style.transform = ``;
    });
});
