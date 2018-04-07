/*Реализуйте функцию, которая делает заглавной первую букву каждого слова в предложении. */
'use strict'

function perform18(str) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( solution(str) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №18" + "</br></br>" + "const solution = " + solution;
}

const solution = (str) => {
  const arr = str.split(' ');
  const arrNew = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][0] !== undefined) {
      arrNew[i] = arr[i][0].toUpperCase();
    } else arrNew[i] = "";
    for (let j = 1; j < arr[i].length; j += 1) {
      arrNew[i] += arr[i][j];
    };
  };
  return arrNew.join(" ");
};
