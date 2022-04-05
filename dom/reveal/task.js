const revails = document.querySelectorAll(".reveal");
for (const reveal of revails) {
    window.addEventListener('scroll', () => {
        const {top, bottom} = reveal.getBoundingClientRect();
        if ((bottom < 0) || (top > window.innerHeight)) {
            reveal.classList.remove("reveal_active");
        }
        else {
            reveal.classList.add("reveal_active");
        }
    })
}