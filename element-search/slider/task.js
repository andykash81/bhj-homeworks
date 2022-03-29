const image = document.querySelectorAll(".slider__item");
const arrows = document.querySelectorAll(".slider__arrow");
let activImage = 0;

for (const arrow of arrows) {
    arrow.addEventListener('click', () => {
        image[activImage].classList.remove("slider__item_active");
        if (arrow.classList.contains("slider__arrow_next")) {
            activImage = activImage + 1;
            if (activImage >= image.length) {
                activImage = 0
            }
            image[activImage].classList.add("slider__item_active");
        }

        if (arrow.classList.contains("slider__arrow_prev")) {
            activImage = activImage - 1;
            if (activImage < 0) {
                activImage = image.length - 1;
            }
            image[activImage].classList.add("slider__item_active");
        }
    })
}