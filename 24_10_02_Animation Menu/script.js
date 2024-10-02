let links = document.querySelectorAll('li');
let indicator = document.querySelector('.indicator');

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    indicator.style.transform = `translateX(calc(70px * ${index}))`;
  })
})