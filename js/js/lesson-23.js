/* Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.*/
'use strict'

function perform23(x, y) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( diff(x, y) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №23" + "</br></br>" + "const diff = " + diff;
}

const diff = (x, y) => {
  if (x < y) {
    return (y - x) < (x - y + 360) ? (y - x) : (x - y + 360);
  }
  return (x - y) < (y - x + 360) ? (x - y) : (y - x + 360);
};
