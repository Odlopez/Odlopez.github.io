/* Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
Все запуски функций должны срабатывать быстро. */
  'use strict'

  function perform12(n) {
    //очищаем текстовое окно
    document.querySelector(".window-code").innerHTML = "";

    // выполняем задание
    fib(n);

    // записываем результат в окно
    document.querySelector(".window-code").innerHTML = "Задание №12" + "</br></br>" + fib;
  }

  function fib(n) {
    return ((Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5)).toFixed();
}  //чтобы красиво в окошке код отображался
