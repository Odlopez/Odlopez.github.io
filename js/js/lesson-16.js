/* Реализуйте функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный. */
'use strict'

function perform16(str) {

  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( invertCase(str) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №16" + "</br></br>" + "const invertCase = " + invertCase;
}

const invertCase = (str) => {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] === arr[i].toUpperCase() ) {
      arr[i] = arr[i].toLowerCase();
    } else arr[i] = arr[i].toUpperCase();
  }
  return arr.join('');
}
