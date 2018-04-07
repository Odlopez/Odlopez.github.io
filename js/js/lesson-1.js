/* Сделайте страницу, которая выводит «Я – JavaScript!».
   Создайте её на диске, откройте в браузере, убедитесь, что всё работает.*/

function greeting() {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  alert("Я – JavaScript!");

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №1" + "</br></br>" +
    "  alert('Я – JavaScript!');";
}
