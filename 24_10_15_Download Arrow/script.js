let btn = document.querySelector('.btn');
let num = document.querySelector('.num');
let count = 0;

btn.addEventListener('click', () => {
  btn.classList.add('active');

  setTimeout(() => {
    let interval = setInterval(() => {
      num.style.visibility = "visible";
      if (count <= 100) {
        num.innerHTML = count + "%";
        count++;
      }
    }, 30)
  }, 2500)

})