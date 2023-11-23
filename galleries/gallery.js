let currentSlide = 1;

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    if (n > slides.length) {
        currentSlide = 1;
    }
    if (n < 1) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide - 1].style.display = 'block';
}

function changeSlide(n) {
    showSlide(currentSlide += n);
}

showSlide(currentSlide);
