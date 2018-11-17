/* Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.*/
'use strict'

function perform20(str) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( checkSpam(str) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №20" + "</br></br>" + "const checkSpam = " + checkSpam;
}

const checkSpam = (str) => {
  if (str.toLowerCase().indexOf('viagra') != -1 || str.toLowerCase().indexOf('xxx') != -1) {
   return true;
  } else return false;
}
