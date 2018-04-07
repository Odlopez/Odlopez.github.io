/* Напишите цикл, который предлагает prompt ввести число, большее 100.
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC). */

function repeatCycleWhileNot() {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  do {
    var userOption = prompt("Введите число большее 100", "");
    if (isNaN(+userOption)) {
      alert ("Вы ввели не число");
    }
  } while(userOption < 100 && userOption != null || isNaN(+userOption));

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = 'Задание №8' + '</br></br>' +  'do {' + '</br>' +
  '  var userOption = prompt("Введите число большее 100", "");' + '</br>' + '  if (isNaN(+userOption)) {'
  + '</br>' + '    alert ("Вы ввели не число");' + '</br>' + '  }' + '</br>' +
  '} while(userOption < 100 && userOption != null || isNaN(+userOption));';
}


