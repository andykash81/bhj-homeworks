let checkBoxs = document.querySelectorAll("li.interest > label");
for (const checkBox of checkBoxs) {
    checkBox.addEventListener('change', () => {
        const subCase = checkBox.nextElementSibling;
        if (checkBox.nextElementSibling && subCase.classList.contains('interests_active') ) {
            const secondTree = subCase.querySelectorAll("ul.interests_active > li > label > input");
            for (const item of secondTree) {
                if (item.checked == true){
                    item.checked = false;
                } else {
                    item.checked = true;
                }
                
            }
        }
    })
}