let cards = document.querySelectorAll(".content");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let charWrapper = card.querySelector(".char-wrapper");

    let rect = card.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    charWrapper.style.setProperty("--x", `${x}px`);
    charWrapper.style.setProperty("--y", `${y}px`);

    charWrapper.innerText = getRandomString(2000);
  });
});

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let getRandomString = (len) => {
  return Array.from(Array(len)).map(ranChars).join("");
};

let ranChars = () => {
  return chars[Math.floor(Math.random() * (chars.length - 1))];
};