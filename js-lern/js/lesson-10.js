/* Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше. */

function perform10(x, n) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  pow(x, n);

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №10" + "</br></br>" + pow;
}

function pow(x, n) {
  var product = 1;
  if (n > 0 && n % n.toFixed() == 0) {
    for (var i = 0; i < n; i++) {
      product *= x;
    }
  } else alert("Степень должна быть натуральным числом");
}
