var modalButtonOpen = document.querySelector(".contacts__btn");
var modalButtonClose = document.querySelector(".feedback-form__close");
var overlay = document.querySelector(".overlay");
var feedBackForm = overlay.querySelector(".feedback-form");
var login = document.querySelector(".feedback-form__login");
var email = document.querySelector(".feedback-form__email");
var message = document.querySelector(".feedback-form__text");
// Открываем overlay, модальное окно выезжает с помощью анимации, после чего класс с анимацией удаляется.
modalButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("js-modal-show");
  feedBackForm.classList.add("js-rotate-normal");
  setTimeout( function() {
    feedBackForm.classList.remove("js-rotate-normal");
  }, 400);
  login.focus();
});
// Закрываем overlay после анимации закрытия модального окна.
modalButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedBackForm.classList.add("js-rotate-reverse");
  setTimeout( function() {
    overlay.classList.remove("js-modal-show");
    feedBackForm.classList.remove("js-rotate-reverse");
  }, 390);
});
// Запускаем анимацию "дрожжания окна", если поля формы не заполнены.
feedBackForm.addEventListener("submit", function (evt) {
  var charCode = evt.charCode;
  if (!login.value || !email.value || !message.value || login.value.match(/\s/g)) {
    evt.preventDefault();
    feedBackForm.classList.add("js-modal-animation");
    setTimeout( function() {
      feedBackForm.classList.remove("js-modal-animation");
    }, 400);
  }
});
// В случае, если модальное окно открыто, можем закрыть его с помощью клавиши "esc".
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (overlay.classList.contains("js-modal-show")) {
      evt.preventDefault();
      overlay.classList.remove("js-modal-show");
    }
  }
});
