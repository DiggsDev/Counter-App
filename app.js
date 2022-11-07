let count = 0;

const buttons = document.querySelectorAll(".button");
const counterValue = document.querySelector(".counterValue");

buttons.forEach(function (button) {
    button.addEventListener("click", function(e) {
        const clickType = e.currentTarget.classList;
        if (clickType.contains("decrease")) {
            count--;
        } else if (clickType.contains("increase")) {
            count++;
        } else if (clickType.contains("reset")) {
            count = 0;
        }
        counterValue.textContent = count;
    });
});
