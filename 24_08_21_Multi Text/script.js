let wrapper = document.querySelector('.wrapper');
let val = document.querySelector('.val');

let arr = ["Web Developer", "App Developer", "Web Web Web"];

let count = 0;

function textAnim() {
    if (count >= arr.length) count = 0;

    val.innerHTML = '';

    for (let i = 0; i < arr[count].length; i++) {
        let div = document.createElement('div');

        div.innerHTML = arr[count][i];

        if (div.innerHTML == ' ') {
            div.innerHTML = '&nbsp';
        }

        div.classList.add("txt");
        div.classList.add("anim");
        div.style.animationDelay = i / 10 + "s";

        val.appendChild(div);
    }

    count++;

}

setInterval(textAnim, 2000);