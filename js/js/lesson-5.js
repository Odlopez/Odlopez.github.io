/*Перепишите if с использованием оператора '?':
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}*/

function ternaryOperatorSimple() {

  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = 'Задание №5' + '<br><br>' +
  "var result = (a + b < 4) ? 'Мало' : 'Много';"
}
