/* Перепишите код с использованием одной конструкции switch:
var a = +prompt('a?', '');
if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}
if (a == 2 || a == 3) {
  alert( '2,3' );
} */

function perform9() {

  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  constructionSwitch();

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №9" + "</br></br>" + constructionSwitch;
}

function constructionSwitch() {
  var a = +prompt("a?", "");
  switch (a) {
    case 0:
      alert(0);
      break;

    case 1:
      alert(1);
      break;

    case 2:
    case 3:
      alert("2,3");
      break;
  };
}
