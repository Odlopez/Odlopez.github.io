'use strict';

(function () {
  // Полифилл для свойства closest
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (selector) {
      var elem = this;

      var checkItem = function checkItem(parent, element) {
        var parentChildren = Array.prototype.slice.call(parent.querySelectorAll(selector));

        return parentChildren.some(function (it) {
          return it === element;
        });
      };

      do {
        var parent = elem.parentNode;

        if (parent && checkItem(parent, elem)) {
          return elem;
        } else {
          elem = parent;
        }
      } while (parent);

      return null;
    };
  }
})();
