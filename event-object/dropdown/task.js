const dropdownValues = document.querySelectorAll(".dropdown__value")

for(const dropdownValue of dropdownValues)
    dropdownValue.addEventListener('click', (event) => {
        const drops = document.querySelectorAll(".dropdown__item");
        const dropdownList = document.querySelector(".dropdown__list")
        dropdownList.classList.add("dropdown__list_active");
        for (const drop of drops) {
            drop.addEventListener('click', (event) => {
                dropdownValue.textContent = drop.textContent;
                dropdownList.classList.remove("dropdown__list_active");
                event.preventDefault();
            })
        }
    })