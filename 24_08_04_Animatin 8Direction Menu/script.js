let toggleBtn = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})