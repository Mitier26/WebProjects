let marker = document.querySelector("#marker");
let item = document.querySelectorAll('.box');

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.top = e.offsetTop + 'px';
}

item.forEach(link => {
    link.addEventListener("mouseover", (e) => {
        indicator(e.target);
    })
})