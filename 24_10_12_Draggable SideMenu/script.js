let sidebar = document.querySelector('.sidebar');
let wrappers = document.querySelectorAll('.wrapper');

sidebar.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('idTxt', e.target.id);

  console.log(e.dataTransfer.getData('idTxt'));
});

wrappers.forEach((wrapper) => {
  wrapper.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.target.classList.add('drag');
  })

  wrapper.addEventListener('drop', (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData('idTxt');
    console.log(data);
    if (!wrapper.querySelector('.sidebar')) {
      e.target.appendChild(document.querySelector("#" + data));
    }

    e.target.classList.remove('drag');
  })

  wrapper.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.target.classList.remove('drag');
  })
})