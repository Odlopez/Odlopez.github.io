/* Реализуйте функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки.*/
'use strict'

function perform26(num) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( formattedTime(num) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №26" + "</br></br>" + "const formattedTime = " + formattedTime;
}

const formattedTime = (num) => {
  const result = [0, 0, ':', 0, 0];

  if (num > 1440) {
    num = num - 1440 * Math.floor(num / 1440);
  };

  const dozensOfHours = Math.floor(num / 600);
  num = num - 600 * dozensOfHours;
  result[0] = dozensOfHours;

  const hours = Math.floor(num / 60);
  num = num - 60 * hours;
  result[1] = hours;

  const tensOfMinutes = Math.floor(num / 10);
  num = num - 10 * tensOfMinutes;
  result[3] = tensOfMinutes;
  result[4] = num;

  return result.join('');
};
