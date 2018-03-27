var modalButtonOpen = document.querySelector(".contacts__btn");
var modalButtonClose = document.querySelector(".feedback-form__close");
var overlay = document.querySelector(".overlay");
var feedBackForm = overlay.querySelector(".feedback-form");
var login = document.querySelector(".feedback-form__login");
var email = document.querySelector(".feedback-form__email");
var message = document.querySelector(".feedback-form__text");

modalButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("js-modal-show");
  feedBackForm.classList.add("js-rotate-normal");
  setTimeout( () => {
    feedBackForm.classList.remove("js-rotate-normal");
  }, 400);
  login.focus();
});

modalButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedBackForm.classList.add("js-rotate-reverse");
  setTimeout( () => {
    overlay.classList.remove("js-modal-show");
    feedBackForm.classList.remove("js-rotate-reverse");
  }, 390);
});

feedBackForm.addEventListener("submit", function (evt) {
  var charCode = evt.charCode;

  if (!login.value || !email.value || !message.value || login.value.match(/\s/g)) {
    evt.preventDefault();

    feedBackForm.classList.add("js-modal-animation");

    setTimeout( () => {
      feedBackForm.classList.remove("js-modal-animation");
    }, 400);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (overlay.classList.contains("js-modal-show")) {
      evt.preventDefault();
      overlay.classList.remove("js-modal-show");
    }
  }
});
