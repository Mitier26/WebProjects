let currentPage = 1;
function loadImage() {
    let image = Array.from({ length: 24 }, (_, index) => {
        return `<img src ="img${index + 1}.jpg">`;
    });
    let container = document.getElementById('container')
    container.innerHTML += image.join('');
}

loadImage();

window.addEventListener('scroll', function () {
    let { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
        currentPage++;
        loadImage();
    }
})