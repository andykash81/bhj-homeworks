const menuAll = document.querySelectorAll(".menu__link");

for (const menu of menuAll) {
    menu.addEventListener('click', (event) => {
        const menuSub = menu.nextElementSibling.classList.contains("menu_sub");
        const menuActiv = menu.nextElementSibling.classList.contains("menu_active");
        if (menuSub) {
            if (menuActiv && menuSub) {
                menu.nextElementSibling.classList.remove("menu_active");
                return event.preventDefault();
            }
            menu.nextElementSibling.classList.add("menu_active");
            return event.preventDefault();
        }
    })
}