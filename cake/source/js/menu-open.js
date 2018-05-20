var button = document.querySelector(".header__button");
var menu = document.querySelector(".header__navigation");

window.addEventListener("resize", function () {
  var width = window.innerWidth;

  if (width > 1366) {
    menu.classList.remove("js-visible");
  }
})

button.addEventListener("click", function (evt) {
  evt.preventDefault();

  var width = window.innerWidth;

  if (width < 1366) {
    menu.classList.toggle("js-visible");
  }
});
