/* Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.*/
'use strict'

function perform22(num) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( reverseInt(num) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №22" + "</br></br>" + "const reverseInt = " + reverseInt;
}

const reverseInt = (num) => {
  const arr = String(num).split('');
  let result = [];
  if (isNaN(arr[0])) {
    result[0] = arr[0];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if ( !isNaN(arr[i]) ) {
      result.push(arr[i]);
    }
  };
  return +result.join('');
};
