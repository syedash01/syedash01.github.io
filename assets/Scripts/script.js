let hamburgerElement = document.querySelector(".hamburger");
hamburgerElement.addEventListener("click", menuItems);

let navBar = document.querySelector(".menu");

function menuItems() {
  hamburgerElement.classList.toggle("is-active");
  // document.body.style.display = 'none';
  navBar.classList.toggle("is-clicked");
  hamburgerElement.style.scroll = "no-scroll";
}
