let prevMouseX = null;
let prevMouseY = null;

function heart(event) {
    if (prevMouseX !== null && prevMouseY !== null) {
        let deltaX = event.pageX - prevMouseX;
        let deltaY = event.pageY - prevMouseY;
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance >= 50) {
            createHearts(event.pageX, event.pageY);
            prevMouseX = event.pageX;
            prevMouseY = event.pageY;
        }
    }
    else {
        createHearts(event.pageX, event.pageY);
        prevMouseX = event.pageX;
        prevMouseY = event.pageY;
    }
}

function createHearts(x, y) {
    let i = document.createElement('i');
    document.body.appendChild(i);
    i.style.top = (event.pageY) + 'px';
    i.style.left = (event.pageX) + 'px';
    i.style.scale = `${Math.random() * 2 + 1}`
    i.style.setProperty('--x', getRandomValue());
    i.style.setProperty('--y', getRandomValue());

    setTimeout(() => {
        document.body.removeChild(i);
    }, 2000);
}

function getRandomValue() {
    return `${Math.random() * 400 - 200}px`
}

document.addEventListener('mousemove', heart);