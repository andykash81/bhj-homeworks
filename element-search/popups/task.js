const arrayDiv = Array.from(document.querySelectorAll("div"));

arrayDiv.forEach((div) => {
    console.log(div.textContent);
});

const divPorupMain = document.getElementById("modal_main");
const divPorupSuccess = document.getElementById("modal_success");
const divClose = document.querySelectorAll(".modal__content div");
const divBtnDanger = document.querySelector(".modal__content a");
let divClose1;

divPorupMain.classList.add("modal_active");

divBtnDanger.onclick = () => {
    divPorupSuccess.classList.add("modal_active");
    divPorupMain.classList.remove("modal_active");
}

for (const button of divClose) {
    button.addEventListener('click', () => {
        divPorupMain.classList.remove("modal_active");
        divPorupSuccess.classList.remove("modal_active");
    })
  }    
