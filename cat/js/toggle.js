'use strict';

(function () {
  var STYLES = {
    IMAGE: {
      MOBILE: '',
      TABLET: 'left: 8px;',
      DESKTOP: 'left: -18px;'
    },
    IMAGE_BEFORE: {
      MOBILE: '',
      TABLET: 'left: 51%;',
      DESKTOP: 'left: 0px;'
    },
    IMAGE_WRAP: {
      MOBILE: '',
      TABLET: 'left: 50%;',
      DESKTOP: 'left: calc(50% + 18px);'
    },
    SLIDER: {
      MOBILE: '',
      TABLET: 'left: 50%;',
      DESKTOP: 'left: 50%;'
    },
  };
  var IMAGE_BEFORE_COORDINATE = {
    TABLET: '51%',
    DESKTOP: '0px'
  };
  var SCREEN = {
    TABLET: 768,
    DESKTOP: 1300
  }
  var parent = document.querySelector('.example__wrap--images');
  var range = document.querySelector('.toggle__range');
  var slider = document.querySelector('.toggle__slider');
  var imageWrap = document.querySelector('.example__image-wrap');
  var imageAfter = document.querySelector('.example__image--after');
  var imageBefore = document.querySelector('.example__image--before');
  var checkPoint = range.offsetWidth / 3;

  // Функция, позволяющая задавать стили по любому селектору. Работает только в хроме.
  var addRules = (function (style) {
    var sheet = document.head.appendChild(style).sheet;

    return function (selector, css) {
      if(!sheet.rules[0]) {
        sheet.insertRule(selector + '{' + css + '}', 0);
      } else {
        sheet.rules[0].style = css;
      }
    }
  })(document.createElement('style'));

  // Функция сбрасывает стили до состояния "по-умолчанию", в случае изменения разрешения окна
  var onWindowResize = function () {
    if (window.innerWidth < SCREEN.TABLET) {
      imageWrap.style.cssText = STYLES.IMAGE_WRAP.MOBILE;
      imageAfter.style.cssText = STYLES.IMAGE.MOBILE;
      imageBefore.style.cssText = STYLES.IMAGE_BEFORE.MOBILE;
      slider.style.cssText = STYLES.SLIDER.MOBILE;
    } else if (window.innerWidth < SCREEN.DESKTOP) {
      imageWrap.style.cssText = STYLES.IMAGE_WRAP.TABLET;
      imageAfter.style.cssText = STYLES.IMAGE.TABLET;
      imageBefore.style.cssText = STYLES.IMAGE_BEFORE.TABLET;
      slider.style.cssText = STYLES.SLIDER.TABLET;
    } else {
      imageWrap.style.cssText = STYLES.IMAGE_WRAP.DESKTOP;
      imageAfter.style.cssText = STYLES.IMAGE.DESKTOP;
      imageBefore.style.cssText = STYLES.IMAGE_BEFORE.DESKTOP;
      slider.style.cssText = STYLES.SLIDER.DESKTOP;
    }
  };

  // Обработчик события нажания на слайдер
  var onSliderMousedown = function (e) {
    var shift = e.clientX - e.target.offsetLeft;
    var imageWrapShift = e.clientX - imageWrap.offsetLeft;
    var imageCoordinateX = imageAfter.offsetLeft;
    var imageBeforeCoordinateX = (window.innerWidth > SCREEN.TABLET && window.innerWidth < SCREEN.DESKTOP) ? IMAGE_BEFORE_COORDINATE.TABLET : IMAGE_BEFORE_COORDINATE.DESKTOP;
    var startX = e.clientX;

    // Обработчик события движения мыши
    var onSliderMove = function (evtMove) {
      evtMove.preventDefault();

      if (evtMove.clientX - shift > 0 && evtMove.clientX - shift < range.offsetWidth) {
        slider.style.left = evtMove.clientX - shift + 'px';
        imageWrap.style.left = evtMove.clientX - imageWrapShift + 'px';
        imageAfter.style.left = imageCoordinateX - (evtMove.clientX - startX) + 'px';


        if (slider.offsetLeft < checkPoint) {
          imageBefore.style.cssText = 'left: calc(' + imageBeforeCoordinateX + ' + ' + (checkPoint - slider.offsetLeft) + 'px);';
        }
      }

    };

    // Обработчик события отпускаяния мыши.
    var onSliderMouseup = function () {
      document.removeEventListener('mousemove', onSliderMove);
      document.removeEventListener('mouseup', onSliderMouseup);
    };

    if (window.innerWidth >= SCREEN.TABLET) {
      document.addEventListener('mousemove', onSliderMove);
      document.addEventListener('mouseup', onSliderMouseup);
    }
  };

  slider.addEventListener('mousedown', onSliderMousedown);

  window.addEventListener('resize', onWindowResize)
})();
