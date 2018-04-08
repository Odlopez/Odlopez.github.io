/* Реализуйте функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки.*/
'use strict'

function perform25(num) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( isPowerOfThree(num) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №25" + "</br></br>" + "const isPowerOfThree = " + isPowerOfThree;
}

const isPowerOfThree = (num) => {
  if (num === 1) {
    return true;
  }
  let test = num;
  while (test > 4) {
    test = test / 3;
  }
  return test === 3;
};
