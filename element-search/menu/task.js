const menuLink = Array.from(document.querySelectorAll(".menu_main .menu__link"));

for (let i of menuLink) {
    i.onclick = function() {

        if (i.parentElement.querySelector(".menu_sub")) {

            if (i.parentElement.querySelector(".menu_active")) {

                i.parentElement.querySelector(".menu_sub").className = "menu menu_sub";

            } else {

                let oldClass = i.parentElement.querySelector(".menu_sub").className;

                if (document.querySelector(".menu_active")) {
                    document.querySelector(".menu_active").className = oldClass;
                }

                i.parentElement.querySelector(".menu_sub").className = oldClass + " menu_active";
            }      

            return false;

       }
    }
}