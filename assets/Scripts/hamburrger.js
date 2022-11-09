let clickButton = document.querySelector('.hamburger');


clickButton.addEventListener("click", clickedd);

function clickedd() {
    clickButton.classList.toggle('is-active');
}