/* Реализуйте функцию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).*/
'use strict'

function perform28(str) {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert ( dnaToRna(str) );

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №28" + "</br></br>" + "const dnaToRna = " + dnaToRna + "</br></br>" +
  "Версия №2" + "</br></br>" + "const solution = " +  version_2;
}

const dnaToRna = (str) => {
  let result = '';
  if (!str) {
    return result;
  }
  for (let i = 0; i < str.length; i++) {
    switch(str[i]) {
      case('G'):
        result += 'C';
        break;
      case('C'):
        result += 'G';
        break;
      case('T'):
        result += 'A';
        break;
      case('A'):
        result += 'U';
        break;
      default:
        return null;
    }
  }
  return result;
};

const version_2 = (str) => {
  const DNK = ['A', 'T', 'C', 'G'];
  return str.split('').map( (item) => { return ['T', 'A', 'G', 'C'][DNK.indexOf(item)]} ).join('');
}
