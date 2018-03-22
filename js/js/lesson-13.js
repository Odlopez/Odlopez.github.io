/* Создайте страницу, которая предлагает ввести два числа и выводит их сумму. */
'use strict'

function perform13() {

  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( sum() );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №13" + "</br></br>" + sum;
}

function sum() {
  do {
    var a = prompt("Введите первое число", "");
    if ( !isFinite(a) || isNaN(parseFloat(a)) ) {
      alert("Значение, введенное Вами, не является числом");
    }
  } while ( !isFinite(a) || isNaN(parseFloat(a)) );

  do {
    var b = prompt("Введите второе число", "");
    if ( !isFinite(b) || isNaN(parseFloat(b)) ) {
      alert("Значение, введенное Вами, не является числом");
    }
  } while ( !isFinite(b) || isNaN(parseFloat(b)) );

  return parseFloat(a) + parseFloat(b);
}
