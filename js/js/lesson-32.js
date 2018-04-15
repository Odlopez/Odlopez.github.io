/* Напишите алгоритм, который берет массив и перемещает все нули до конца, сохраняя порядок остальных элементов.*/
'use strict'

function perform32(arr) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( moveZeros(arr) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №32" + "</br></br>" + "const moveZeros = " + moveZeros;
}

const moveZeros = (arr) => {
  const zero= [], notZero = [];
  arr.forEach( (item) => { item === 0 ? zero.push(item) : notZero.push(item)} );
  return notZero.concat(zero);
}
