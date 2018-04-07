/*Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости – оформляйте код в несколько строк.

var message;
if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}*/

function ternaryOperatorComplex() {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №6" + '<br><br>' +
  "var  message = (login == 'Вася') ? 'Привет' :" + "<br>" + "(login == 'Директор') ? 'Здравствуйте' :" + "<br>" +
  "(login == ' ') ? 'Нет логина' : ' ';";
}
