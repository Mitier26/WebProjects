function liquid() {
    let box = document.querySelector(".box");
    let e = document.createElement('div');
    console.log(e);
    e.setAttribute('class', 'drops');
    box.appendChild(e);

    let size = Math.random() * 100;
    e.style.width = 15 + size + 'px';
    let BoxWidth = box.clientWidth;
    e.style.left = Math.random() * BoxWidth + 'px';

    setTimeout(function () {
        box.removeChild(e);
    }, 5000)
}

setInterval(function () {
    liquid();
}, 200)