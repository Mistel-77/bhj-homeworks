const rotator_case =  Array.from(document.querySelectorAll('.rotator__case'));
let current;
rotator_case[0].style.color = rotator_case[0].dataset.color;
intervalID = setInterval(changeRotator, 1000);

function changeRotator() {
    let currentRotator = document.querySelector('.rotator__case_active');
    current = rotator_case.indexOf(currentRotator);
    if (current == rotator_case.length - 1) {
        rotator_case[0].classList.add('rotator__case_active');
    } else {
        currentRotator.nextElementSibling.classList.add('rotator__case_active');
    }
    currentRotator.classList.remove('rotator__case_active');
    currentRotator = document.querySelector('.rotator__case_active');
    currentRotator.style.color = currentRotator.dataset.color;
}