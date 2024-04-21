let paragraph = document.querySelector('.paragraph');
let spans = paragraph.textContent
    .trim()
    .split(' ')
    .map((word) => `<span>${word}&nbsp</span>`);
paragraph.innerHTML = spans.join('');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let paragraphTop = paragraph.getBoundingClientRect().top;

    document.querySelectorAll('.paragraph span').forEach((span, index) => {
        let spanTop = paragraphTop + (span.offsetHeight + 20) * index;
        span.classList.toggle('reveal', scrollPosition > spanTop - 20);
    });
});
