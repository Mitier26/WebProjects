let container = document.getElementById("container");

for (let i = 30; i >= -30; i--) {
    let span = document.createElement('span');
    span.style.setProperty('--i', i);
    container.appendChild(span);
}
