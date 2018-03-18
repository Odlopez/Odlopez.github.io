/* Перепишите код с использованием одной конструкции switch:
var a = +prompt('a?', '');
if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}
if (a == 2 || a == 3) {
  alert( '2,3' );
} */

function constructionSwitch() {

  //очищаем текстовое окно
  document.querySelector(".window-code").innerHTML = "";

  // выполняем задание
  var a = +prompt("a?", "");
  switch (a) {
    case 0:
      alert(0);
      break;

    case 1:
      alert(1);
      break;

    case 2:
    case 3:
      alert("2,3");
      break;
  };

  // записываем результат в окно
  document.querySelector(".window-code").innerHTML = 'Задание №9' + '</br></br>' + 'var a = +prompt("a?", "");' + '</br>' +
  'switch (a) {' + '</br>' + '  case 0:' + '</br>' + '    alert(0);' + '</br>' + '    break;' + '</br></br>' +
  '  case 1:' + '</br>' + '    alert(1);' + '</br>' + '    break;' + '</br></br>' + '  case 2:' + '</br>' + '  case 3:' + '</br>' +
  '    alert("2,3");' + '</br>' + '    break;' + '</br>' + '};';
}
