// Сделайте страницу, которая выводит «Я – JavaScript!». Создайте её на диске, откройте в браузере, убедитесь, что всё работает.
function greeting() {
  alert("Я – JavaScript!");
}

// 1. Объявите две переменные: admin и name. 2. Запишите в name строку 'Василий'. 3. Скопируйте значение из name в admin. 4. Выведите admin (должно вывести «Василий»).
function declareVariable() {
  var admin, name = "Василий";
  admin = name;
  alert(admin);
}
