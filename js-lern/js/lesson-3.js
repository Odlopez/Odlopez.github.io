/*Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».
Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».*/

function askAboutJS() {
  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  var userAnswer = prompt("Каково «официальное» название JavaScript?");
  if (userAnswer === "ECMAScript") {
    alert("Верно!");
  } else {
    alert("Не знаете? «ECMAScript»!");
  }

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = "Задание №3" + "</br></br>" +
  "  var userAnswer = prompt('Каково «официальное» название JavaScript?');" + "</br>" + "  if (userAnswer === 'ECMAScript') {"  + "</br>" +
  "    alert('Верно!');" + "</br>" + "  } else {" + "</br>" + "    alert('Не знаете? «ECMAScript»!');";
}
