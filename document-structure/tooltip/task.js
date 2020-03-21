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
        

        let html = `<div class="tooltip" style="display: block; left: ${event.target.getBoundingClientRect().left}px; top: ${event.target.getBoundingClientRect().top + 19}px;">
        ${event.target.title}
      </div>`;
        event.target.insertAdjacentHTML('afterEnd', html);
    });
    
};

