const menuAll = document.querySelectorAll(".menu__link");

for (const menu of menuAll) {
    menu.addEventListener('click', (event) => {
        const menuSub = menu.nextElementSibling.classList.contains("menu_sub");
        if (menuSub) {
                menu.nextElementSibling.classList.toggle("menu_active");
                event.preventDefault();
        }
    })
}