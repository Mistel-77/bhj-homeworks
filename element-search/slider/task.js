const sliders = Array.from(document.querySelectorAll(".slider__item"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));

const arrowPrev = document.querySelectorAll(".slider__arrow_prev");
const arrowNext = document.querySelectorAll(".slider__arrow_next");

let currentSlide = 0;
let oldClass = sliders[currentSlide + 1].className;
let oldClassDot = dots[currentSlide].className;
dots[currentSlide].className = oldClassDot + " slider__dot_active";
console.log(dots);

arrowNext[0].onclick = function() {
    sliders[currentSlide].className = oldClass;
    dots[currentSlide].className = oldClassDot;
    currentSlide++;
    if (currentSlide >= sliders.length) {
        currentSlide = 0;
    }
    sliders[currentSlide].className = oldClass + " slider__item_active";
    dots[currentSlide].className = oldClassDot + " slider__dot_active";
}

arrowPrev[0].onclick = function() {
    sliders[currentSlide].className = oldClass;
    dots[currentSlide].className = oldClassDot;
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = sliders.length - 1;
    }
    sliders[currentSlide].className = oldClass + " slider__item_active";
    dots[currentSlide].className = oldClassDot + " slider__dot_active";
}

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function() {
        if (document.querySelector(".slider__dot_active")) {
            document.querySelector(".slider__dot_active").className = oldClassDot;
        }

        dots[i].className = oldClassDot + " slider__dot_active";
        sliders[currentSlide].className = oldClass;
        currentSlide = i;
        sliders[currentSlide].className = oldClass + " slider__item_active";

    }
}