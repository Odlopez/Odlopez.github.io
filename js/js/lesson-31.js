'use strict'

function perform31(lng, wdth) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( sqInRect(lng, wdth) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №31" + "</br></br>" + "const sqInRect = " + sqInRect;
}

const sqInRect = (lng, wdth) => {
  if (lng === wdth) {
    return null;
  }
  const result = [];
  while (lng && wdth) {
    result.push( lng >= wdth ? wdth : lng);
    lng >= wdth ? lng -= wdth : wdth -= lng;
  }
  return result;
}
