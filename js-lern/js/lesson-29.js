/*  Создайте функцию, которая квадратирует каждую цифру числа.
    Например, если мы запустим 9119 через функцию, выйдет 811181, потому что 9^2 = 81, а 1^2 = 1.
    Примечание. Функция принимает целое число и возвращает целое число.*/
'use strict'

function perform29(num) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( assertEquals(num) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №29" + "</br></br>" + "const assertEquals = " + assertEquals;
}

const assertEquals = (num) => {
  return +num.toString().split('').map( (item) => {
    return Math.pow(+item, 2);
  } ).join('');
}
