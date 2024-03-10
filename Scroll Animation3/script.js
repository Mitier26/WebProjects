let layer = document.querySelector(".layer");
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    layer.style.left = value *2 +'px';
})