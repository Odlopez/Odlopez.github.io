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
  return  num.toString().split(".")[1] ? "0." + num.toString().split(".")[1] : "0.0";
}
