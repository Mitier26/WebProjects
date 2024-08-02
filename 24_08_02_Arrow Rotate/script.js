document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.container');

    for (let i = 0; i < 30; i++) {
        let arrow = document.createElement("div");
        arrow.classList.add("arrow");
        arrow.style.top = `${Math.random() * 100}vh`
        arrow.style.left = `${Math.random() * 100}vw`
        container.appendChild(arrow);
    }

    document.querySelector('body').addEventListener("mousemove", rotation);

    function rotation() {
        let arw = document.querySelectorAll('.arrow');

        arw.forEach(function (arw) {
            let x = (arw.getBoundingClientRect().left) + (arw.clientWidth / 2);
            let y = (arw.getBoundingClientRect().top) + (arw.clientHeight / 2);

            let radian = Math.atan2(event.pageX - x, event.pageY - y);
            let rot = (radian * (180 / Math.PI) * -1) + 270;
            arw.style.transform = "rotate(" + rot + "deg)";
        })
    }


})