let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("ul");
let wrapper = document.querySelector('.wrapper');
let val = document.querySelector('.val');

menuBtn.addEventListener("click", () => {
    menu.classList.toString('active');
});


let arr = ['aaaaaaaaa', 'bbbbbbbb', 'cccccccccc'], count = 0;

function txtAnim() {
    if (count > arr.length) {
        count = 0;
    }

    val.innerHTML = '';

    for (let i = 0; i < arr[count].length; i++) {
        let div = document.createElement('div');

        div.innerHTML = arr[count][i];

        if (div.innerHTML == " ") {
            div.innerHTML = '$nbsp';
        }

        div.classList.add('txt');
        div.classList.add('anim');
        div.style.animationDelay = 1 / 10 + 's';

        val.appendChild(div);
    }

    count++;
}