const hasTooltips = document.querySelectorAll('.has-tooltip');
console.log(hasTooltips);
for (const hasTooltip of hasTooltips) {
    let toolTip = document.createElement('div');
    hasTooltip.addEventListener('click', (event) => {
        if (toolTip.classList.contains('tooltip')) {
            
        }
        toolTip.textContent = hasTooltip.title;
        toolTip.classList.add('tooltip');
        toolTip.style.left = hasTooltip.left;
        toolTip.style.top = hasTooltip.top;
        toolTip.classList.toggle('tooltip_active');
        console.log(toolTip);
        hasTooltip.insertBefore(toolTip, hasTooltip.firstElementChild);
        event.preventDefault();
    })
}