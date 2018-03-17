/* 1. Объявите две переменные: admin и name.
   2. Запишите в name строку 'Василий'.
   3. Скопируйте значение из name в admin.
   4. Выведите admin (должно вывести «Василий»).*/

function declareVariable() {

  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  var admin, name = "Василий";
  admin = name;
  alert(admin);

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №2" + "</br></br>"  +
  "  var admin, name = 'Василий';" + "</br>" + "  admin = name;" + "</br>" + "  alert(admin);";
}
