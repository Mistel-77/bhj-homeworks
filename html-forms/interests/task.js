const checkboxesInterest = document.querySelectorAll('.interest__check');

function check(event) {
    if (event.target.closest('.interest').querySelector('.interests_active')) {

        let checkboxes = event.target.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check');
        for (let i = 0; i < checkboxes.length; i++) {

            if (event.target.checked) {
                checkboxes[i].checked = true;
            } else {
                checkboxes[i].checked = false;
            }
        };
    };
};

for (let i = 0; i < checkboxesInterest.length; i++) {
    checkboxesInterest[i].addEventListener('change', check);
}