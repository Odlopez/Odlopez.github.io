// Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.

function withinRangeCondition() {

  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  var age = prompt("Введите число", "");
  if (age >= 14 && age <= 90) {
    alert("Находится внутри диапазона 14--90");
  } else alert("Находится вне диапазона 14--90 или не число");

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = 'Задание №7' + '</br></br>' +
  'var age = prompt("Введите число", "");' + '</br>' + 'if (age >= 14 && age <= 90) {' + '</br>' +
  '  alert("Находится внутри диапазона 14--90");' + '</br>' + '} else alert("Находится вне диапазона 14--90 или не число");';
}
