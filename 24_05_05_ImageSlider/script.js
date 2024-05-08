function showBigImage(thumbnail) {
    let bigImage = document.getElementById('bigImage');
    let thumb = thumbnail.querySelector('img');
    let h2 = document.querySelector('h2');
    let color = thumbnail.dataset.color;
    let text = thumbnail.dataset.text;

    bigImage.src = thumb.src;
    document.body.style.backgroundColor = color;
    h2.textContent = text;

    let thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'))

    thumbnail.classList.add('active');
}