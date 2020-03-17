const reveal = document.querySelectorAll('.reveal');
document.addEventListener('scroll', revealDiv)

function revealDiv() {
    for (let i = 0; i < reveal.length; i++)  {
        const viewportHeight = window.innerHeight;
        const elementTop = reveal[i].getBoundingClientRect().top;
        if (elementTop < viewportHeight && elementTop > 0) {
            reveal[i].classList.add('reveal_active');
        };
    };
};