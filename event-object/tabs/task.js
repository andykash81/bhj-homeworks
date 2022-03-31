const tabMenu = document.querySelectorAll(".tab");

for (const menu of tabMenu) {
    const tabContents = document.querySelectorAll(".tab__content");
    menu.addEventListener('click', () => {
        const currentTab = Array.from(tabMenu).findIndex(element => element.classList.contains("tab_active"));
        const currentContent = Array.from(tabContents).findIndex(element => element.classList.contains("tab__content_active"));
        tabMenu[currentTab].classList.remove("tab_active");
        tabContents[currentContent].classList.remove("tab__content_active");

        menu.classList.add("tab_active");
        
        const tabMenuNew = document.querySelectorAll(".tab");
        const currentTabNew = Array.from(tabMenuNew).findIndex(element => element.classList.contains("tab_active"));
        tabContents[currentTabNew].classList.add("tab__content_active");
    })
}