const hambuger = document.querySelector(".humburger-menu");
const navMenu = document.querySelector(".nav-menu");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".menu-link").forEach((n) =>
  n.addEventListener("click", () => {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/*vanilla-tilt.js*/
const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {
  reverse: true,
  max: 15,
  speed: 400,
  scale: 1.12,
  glare: true,
  reset: true,
  perspective: 500,
  transition: true,
  "max-glare": 0.75,
  "glare-prerender": false,
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
  gyroscopeMinAngleY: -45,
  gyroscopeMaxAngleY: 45,
});
