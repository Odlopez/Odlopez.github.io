/*Напишите код, который будет спрашивать логин (prompt).
Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён»,
если вводит что-то другое – «Я вас не знаю».
Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!»,
иначе – «Пароль неверен», при отмене – «Вход отменён».*/

function loginVerification() {

  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  var userLogin = prompt("Ваш логин", "");
  if (userLogin == "Админ") {
    var userPassword =  prompt("Ваш пароль", "");
    if (userPassword == "Чёрный Властелин") {
      alert("Добро пожаловать!");
    } else if (userPassword == null) {
      alert("Вход отменён");
    } else alert("Пароль неверен");
  } else if (userLogin == null) {
    alert("Вход отменён");
  } else alert("Я вас не знаю");

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = 'Задание №4' + '</br></br>' +
  '  var userLogin = prompt("Ваш логин", "");' + '</br>' + '  if (userLogin == "Админ") {'  + '</br>' +
  '    var userPassword =  prompt("Ваш пароль", "");' + '</br>' + '    if (userPassword == "Чёрный Властелин") {' + '</br>' +
  '      alert("Добро пожаловать!");' + '</br>' + '    } else if (userPassword == null) {' + '</br>' +
  '      alert("Вход отменён");' + '</br>' + '    } else alert("Пароль неверен");' + '</br>' +
  '  } else if (userLogin == null) {' + '</br>' + '    alert("Вход отменён");' + '</br>' + '  } else alert("Я вас не знаю");';
}
