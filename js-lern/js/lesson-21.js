/* Реализуйте функцию, которая должна определить, счастливое ли число.
        Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу.
        Количество итераций процесса поиска необходимо ограничить числом 10. */
'use strict'

function perform21(num) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( isHappyNumber(num) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №21" + "</br></br>" + "const isHappyNumber = " + isHappyNumber + "</br></br>" + "const sumOfSquareDigits = " + sumOfSquareDigits;
}

const isHappyNumber = (num) => {
  let counter = 0;
  let suquare = num;
  while (counter < 10) {
    if ( sumOfSquareDigits(suquare) === 1) {
      return "исходное число " + num + " - счастливое.";
    };
    suquare = sumOfSquareDigits(suquare);
    counter += 1;
  };
  return "исходное число " + num + " - НЕ счастливое.";
};

const sumOfSquareDigits = (num) => {
  let result = 0;
  const str = String(num);
  for (let i = 0; i < str.length; i++) {
    result += Math.pow(+str[i], 2);
  };
  return result;
};
