let tooltips = document.querySelectorAll('.has-tooltip');

for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener('click', (event) => {
        event.preventDefault();

        //проверка подсказки у данного элемента
        let open_tooltip_event = tooltips[i].nextElementSibling;
        if (open_tooltip_event != null) {
            if (open_tooltip_event.className == 'tooltip') {
                open_tooltip_event.remove();
                return;
            }
        }
        //проверка открытых подсказок на странице
        let open_tooltip = document.querySelector('.tooltip');
        if(open_tooltip != null) {
            open_tooltip.remove();
        }
        

        let tooltip = document.createElement('div');
        console.log(tooltip);
        tooltip.innerText = event.target.title;
        tooltip.className = 'tooltip';
        tooltip.style.display = 'block';
        //event.target.parentElement.insertBefore(tooltip, event.target.nextElementSibling);
        event.target.insertAdjacentHTML('afterEnd', tooltip);
    });
    
};

