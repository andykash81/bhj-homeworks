const rotators = document.querySelectorAll(".rotator");

for (const rotator of rotators) {
    const rotatorCases = rotator.children;
    setInterval(() =>{
        rotateCaseFunction(rotatorCases);
    }, 1000);
}
function rotateCaseFunction(rotatorCases) {
    for (const rotatorCase of rotatorCases) {
        if (rotatorCase.classList.contains("rotator__case_active")) {
          const currentIndex = Array.from(rotatorCases).findIndex(element => element.classList.contains("rotator__case_active"));
          let nextIndex = currentIndex + 1;
          if (nextIndex >= rotatorCases.length) {
              nextIndex = 0;
              }
          rotatorCase.classList.remove("rotator__case_active");
          rotatorCases[nextIndex].classList.add("rotator__case_active");
          break;
        }
    }
  }