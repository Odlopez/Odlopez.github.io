/* Реализуйте функцию, которая принимает на вход два аргумента - количество нулей и количество единиц,
и определяет сколько есть способов размещения этих нулей и единиц так, что бы не было двух нулей идущих подряд. */
'use strict'

function perform15(x, y) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( withoutTwoZeros(x, y) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №15" + "</br></br>" + "const withoutTwoZeros = " + withoutTwoZeros + "</br></br>" + "const fact = " + fact;
}

const fact = (n) => {
  if  (n === 0) {
    return 1;
  } else if (n < 0) {
    return NaN;
  }
  return n * fact(n - 1);
}

const withoutTwoZeros = (x, y) => {
  const result = fact(y + 1) / fact(x) / fact(y + 1 - x);
  if (result) {
    return result;
  } else return 'нет вариантов';
}
