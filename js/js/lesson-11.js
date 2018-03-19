/* Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n.
  Сделайте три варианта решения:
  1. С использованием цикла.
  2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
  3. С использованием формулы для суммы арифметической прогрессии. */
  'use strict'

  function perform11(n) {

    //очищаем текстовое окно
    document.querySelector(".window-code").innerHTML = "";

    // выполняем задание
    sumTo(n);

    // записываем результат в окно
    document.querySelector(".window-code").innerHTML = "Задание №11" + "</br></br>" + sumTo;
  }

  function sumTo(n) {
    // Первый вариант
    var result = 0;
    for (var i = 1; i <= n; i++) {
      result += i;
    }
    return result;

    // Второй вариант
    var result = 0;
    if (n != 1) {
      result = n + sumTo(n - 1);
    } else result = n;
    return result;

    // Третий вариант
    var result;
    return result = (n + 1) * n / 2;
  }
