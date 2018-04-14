/*Реализуйте функцию, которая делает заглавной первую букву каждого слова в предложении. */
'use strict'

function perform18(str) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( solution(str) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №18" + "</br></br>" + "const solution = " + solution + "</br></br>" +
  "Версия №2" + "</br></br>" + "const solution = " +  version_2;
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

const version_2 = (str) => {
  if (this == '') {
    return null;
  }
  let counter = 0;
  const result = this.split(' ');
  // console.log(result);
  let newArr = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i] === ' ') {
      counter++;
    }
    newArr[i] = result[i][0] ? result[i][0].toUpperCase() + result[i].slice(1) : '';
  }
  if (counter === result.length) {
    return null;
  }
  return newArr.join(' ');
}
