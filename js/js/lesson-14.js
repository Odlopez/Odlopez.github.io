/* Напишите функцию getDecimal(num), которая возвращает десятичную часть числа. */
'use strict'

function perform14(num) {

  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( getDecimal(num) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №14" + "</br></br>" + getDecimal;
}

function getDecimal(num) {
  var result = Math.abs(num) - Math.floor( Math.abs(num) );
  var digit = num.toString().split(".")[1].length;
  return Math.round(result * ("1e" + digit)) / ("1e" + digit);
}
