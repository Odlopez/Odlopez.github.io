/*Реализуйте функцию, которая переворачивает строку задом наперед, используя рекурсию.*/
'use strict'

function perform19(str) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( reverse(str) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №19" + "</br></br>" + "const reverse = " + reverse;
}

const reverse = (str) => {
  if (str.length > 1) {
    let subStr = str.slice(1);
    return reverse(subStr) + str[0];
  } else return str;
}
