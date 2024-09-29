let toggleBtn = document.querySelector('.theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('dark-mode');

  toggleBtn.classList.toggle('fa-moon');
  toggleBtn.classList.toggle('fa-sun');
});

let resizer = document.querySelector('.resizer');
let sideBar = document.querySelector('.sidebar');
let main = document.querySelector('.main');
let profileTxt = document.querySelector('.profile-txt');

let resize = (e) => {
  let size = `${e.x}px`;

  if (e.x < 950 && e.x > 230) {
    sideBar.style.flexBasis = size;
    main.style.width = `calc(100% - ${size})`;
    main.style.left = size;
  }

  if (e.x >= 300) {
    profileTxt.classList.remove('hide');
  }
  else {
    profileTxt.classList.add('hide');
  }

};

resizer.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', resize, false);
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', resize, false);
  }, false);
});