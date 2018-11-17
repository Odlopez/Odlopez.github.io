/* Напишите функцию, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел. */
'use strict'

function perform17(num) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( sumSquareDifference(num) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №17" + "</br></br>" + "const sumSquareDifference = " + sumSquareDifference;
}

const sumSquareDifference = (num) => {
  let sumOfSquare = 0;
  let squareOfSum = 0;
  for (let i = 0; i <= num; i++) {
    sumOfSquare += Math.pow(i, 2);
    squareOfSum += i;
  }
  return Math.pow(squareOfSum, 2) - sumOfSquare;
}
