const sliders = Array.from(document.querySelectorAll(".slider__item"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));

const arrowPrev = document.querySelectorAll(".slider__arrow_prev");
const arrowNext = document.querySelectorAll(".slider__arrow_next");

let currentSlide = 0;
let oldClass = sliders[currentSlide + 1].className;
let oldClassDot = dots[currentSlide].className;
dots[currentSlide].className = oldClassDot + " slider__dot_active";
console.log(dots);

function clearSlide() {
    sliders[currentSlide].className = oldClass;
    dots[currentSlide].className = oldClassDot;
}

function showSlide() {
    sliders[currentSlide].className = oldClass + " slider__item_active";
    dots[currentSlide].className = oldClassDot + " slider__dot_active";
}

arrowNext[0].onclick = function() {
    clearSlide();

    currentSlide++;
    if (currentSlide >= sliders.length) {
        currentSlide = 0;
    }
    showSlide()
}

arrowPrev[0].onclick = function() {
    clearSlide();

    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = sliders.length - 1;
    }
    showSlide();
}

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function() {
        clearSlide();
        currentSlide = i;
        showSlide();
    }
}