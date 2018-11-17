/* Реализуйте функцию Аккермана ackermann(m, n).*/
'use strict'

function perform27(x, y) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( ackermann(x, y) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №27" + "</br></br>" + "const ackermann = " + ackermann;
}

const ackermann = (m, n) => {
  if (m > 0 && n > 0) {
    return ackermann(m - 1, ackermann(m, n - 1));
  } else if (m > 0 && n == 0) {
    return ackermann(m - 1, 1);
  } else if (m == 0) {
    return n + 1;
  }
};
