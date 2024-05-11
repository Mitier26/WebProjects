let box = document.querySelector('.box');
let images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'];

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let viewportHeight = window.innerHeight;

    let imageIndex = Math.floor(scrollPosition / viewportHeight % images.length);

    box.style.backgroundImage = `url(${images[imageIndex]})`;
})