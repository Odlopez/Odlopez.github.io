'use strict';

(function () {
  var ScreenSize = {
    WIDTH: 800,
    HEIGHT: 800
  };
  var PACMAN_OPTIONS = {
    eatingIntensity: [3, 4, 5, 6],
    duration: [1500, 2000, 2500, 3000],
    radius: [20, 30, 40, 50]
  };
  var CANVAS_OPTIONS = {
    top: [15, 25, 30, 40, 50, 60, 70],
    right: [20, 30, 40, 50, 60, 70, 80],
    width: [50, 60, 70, 80]
  };
  var MARGIN = 5;
  var PACMAN_COLOR = 'gold';
  var BACKGROUND_COLOR = '#25212d';
  var REPEAT_DURATION = [5000, 15000];
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  var getRandomNumber = function getRandomNumber(to, from) {
    from = from || 0;

    return Math.round(Math.random() * (to - from) + from);
  };

  /**
   * Очищает полотно
   * @param {CanvasContext} ctx
   */
  var clearCanvas = function (ctx) {
    ctx.clearRect(0, 0, ScreenSize.WIDTH, ScreenSize.HEIGHT);
  };

  /**
   * Возвращаем начальные координаты пакмана в зависимости от
   * @param {Number} progress
   */
  var getCoordX = function (radius, progress) {
    return radius + (ScreenSize.WIDTH - radius * 2) * progress;
  };

  /**
   * Возвращает функцию отрисовки пакмана
   * @param {CanvasContext} ctx
   */
  var getRenderPacmanFunc = function (ctx) {
    var radius = PACMAN_OPTIONS.radius[getRandomNumber(PACMAN_OPTIONS.radius.length - 1)];
    var eatingIntensity = PACMAN_OPTIONS.eatingIntensity[getRandomNumber(PACMAN_OPTIONS.eatingIntensity.length - 1)];

    return function (progress) {
      // очищаем полотно
      clearCanvas(ctx);

      // отрисовываем круг
      ctx.beginPath();
      ctx.fillStyle = PACMAN_COLOR;
      ctx.arc(getCoordX(radius, progress), radius, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();

      // открисовываем треугольник
      ctx.beginPath();
      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.moveTo(getCoordX(radius, progress), radius);
      ctx.lineTo(getCoordX(radius, progress) + radius + MARGIN, radius - (radius * Math.sin(Math.PI * eatingIntensity * progress)));
      ctx.lineTo(getCoordX(radius, progress) + radius + MARGIN, radius + (radius * Math.sin(Math.PI * eatingIntensity * progress)));
      ctx.fill();
      ctx.closePath();
    }
  };

  var endAnimate = function () {
    clearCanvas(ctx);

    var delay = getRandomNumber(REPEAT_DURATION[1], REPEAT_DURATION[0]);

    setTimeout(startAnimatePacman, delay);
  };

  /**
   * Отрисовывает полотно канваса в документе
   */
  var createCanvas = function () {
    canvas.width = ScreenSize.WIDTH;
    canvas.height = ScreenSize.HEIGHT;

    document.body.appendChild(canvas);
    canvas.classList.add('canvas');
  };

  /**
   * Стартуем анимацию пакмана
   */
  var startAnimatePacman = function () {
    canvas.style.top = CANVAS_OPTIONS.top[getRandomNumber(CANVAS_OPTIONS.top.length - 1)] + '%';
    canvas.style.right = CANVAS_OPTIONS.right[getRandomNumber(CANVAS_OPTIONS.right.length - 1)] + '%';
    canvas.style.width = CANVAS_OPTIONS.width[getRandomNumber(CANVAS_OPTIONS.width.length - 1)] + '%';

    var renderPacman = getRenderPacmanFunc(ctx);
    var duration = PACMAN_OPTIONS.duration[getRandomNumber(PACMAN_OPTIONS.duration.length - 1)];

    window.animate(renderPacman, duration, 'linear', endAnimate);
  };

  createCanvas();
  startAnimatePacman();
})();
