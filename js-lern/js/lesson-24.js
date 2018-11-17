/* Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
  Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число).
  Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.*/
'use strict'

function perform24(num) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( isPerfect(num) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №24" + "</br></br>" + "const isPerfect = " + isPerfect;
}

const isPerfect = (num) => {
  let result = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      result += i;
    }
  }
  return num === result && result != 0;
};
