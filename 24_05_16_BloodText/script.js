document.addEventListener("mousemove", function (e) {
    let cursor = document.getElementById("cursor");
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})