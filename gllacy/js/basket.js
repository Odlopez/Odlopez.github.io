'use strict';

(function () {
  const LINK_CLASS_NAME = 'basket__link_actual';
  const declinationBoundaries = {
    FIRST: [1, 11],
    SECOND: [2, 4],
    THIRD: [5, 20]
  };
  const template = document.querySelector('template');
  const basketLink = document.querySelector('.basket__link');
  const basket = document.querySelector('.basket');
  const basketArray = [];

  Object.defineProperty(basketArray, "sum", {
    get: function() {
      return this.reduce(function (value, item) {
        return value + parseInt(item.cost, 10)
      }, 0);
    }
  });

  // Удаляет попар корзины, если в ней нет товаров
  const deleteBasket = function () {
    const popup = basket.querySelector('.basket__popup');

    basket.removeChild(popup);
    basketLink.classList.remove(LINK_CLASS_NAME);
    basketLink.textContent = 'Пусто';
  };

  // Удаляет выбранный продукт из корзины
  const deleteProduct = function (product) {
    for (var i = 0; i < basketArray.length; i++) {
      if (basketArray[i].element === product) {
        basketArray.splice(i, 1);
        break;
      }
    }
  };

  // Склоняет слово "товар"
  const inclinesProduct = function (num) {
    var word = ' товар';
    var wordEnding = 'ов';

    if (num >= declinationBoundaries.THIRD[0] && num <= declinationBoundaries.THIRD[1]) {
      wordEnding = 'ов';
    } else if (num % 10 >= declinationBoundaries.SECOND[0] && num % 10 <= declinationBoundaries.SECOND[1]) {
      wordEnding = 'a';
    } else if (num % 10 === declinationBoundaries.FIRST[0] && num !== declinationBoundaries.FIRST[1]) {
      wordEnding = '';
    }
    
    return num + word + wordEnding;
  };

  // Конструктор для данных, которые необходимы для создания "карточки" товара в корзине
  const ProductData = function (elem) {
    this.url = 'url(' + elem.querySelector('.products__image').src + ')';
    this.productName = elem.querySelector('.link-border').textContent;
    this.price = parseInt(elem.querySelector('.products__cost').textContent, 10) + ' руб.';
    this.cost = parseInt(this.price, 10) * 1.5 + ' руб.';
    this.card = elem;
  };

  // Создает попап, всплывающий, при наведении на ярлык "корзины"
  const createPopup = function () {
    const popup = template.content.querySelector('.basket__popup').cloneNode();

    popup.appendChild(template.content.querySelector('.basket__list').cloneNode());
    popup.appendChild(template.content.querySelector('.basket__amount').cloneNode(true));
    popup.appendChild(template.content.querySelector('.basket__submit').cloneNode(true));
    basket.appendChild(popup);

    basketLink.classList.add(LINK_CLASS_NAME);
  };

  // Колбек для обработчика события нажатия "крестика" в корзине. Удаляет при нажатии "карточку" товара
  const onbasketButtonDeleteClick = function (evt) {
    const item = evt.target.closest('.basket__item');
    const list = evt.target.closest('.basket__list');
    const popup = evt.target.closest('.basket__popup');

    list.removeChild(item);

    deleteProduct(item);

    popup.querySelector('.basket__sum').textContent = basketArray.sum + ' руб.';
    basketLink.textContent = inclinesProduct(basketArray.length);

    if (!basketArray.length) {
      deleteBasket();
    }

    evt.target.removeEventListener('click', onbasketButtonDeleteClick);
  };

  // Наполняет корзину выбранными товарами
  const fillBasket = function (elementData) {
    const basketItem = template.content.querySelector('.basket__item').cloneNode(true);
    const basketImage = basketItem.querySelector('.basket__image');
    const basketProductName = basketItem.querySelector('.basket__product');
    const basketPrice = basketItem.querySelector('.basket__price');
    const basketCost = basketItem.querySelector('.basket__cost');
    const basketButtonsDelete = basketItem.querySelector('.basket__delete-product');
    const basketList = basket.querySelector('.basket__list');
    const basketSum = basket.querySelector('.basket__sum');

    // Создает "карточку" товара в корзине.
    const createBasketProduct = function () {
      basketImage.style.backgroundImage = elementData.url;
      basketProductName.textContent = elementData.productName;
      basketPrice.textContent = elementData.price;
      basketCost.textContent = elementData.cost;

      basketButtonsDelete.addEventListener('click', onbasketButtonDeleteClick);

      elementData.element = basketItem;

      return basketItem;
    };

    basketList.appendChild(createBasketProduct(elementData));
    basketSum.textContent = basketArray.sum + ' руб.';
    basketLink.textContent = inclinesProduct(basketArray.length);
  };

  // Колбек для обработчика события клика по документку. При клике на кнопку товара добавляет его в корзину.
  const onDocumentClick = function (evt) {
    if (evt.target.classList.contains('products__button')) {
      evt.preventDefault();

      const card = evt.target.closest('.products__item');
      const data = new ProductData(card);

      const isRepeat = basketArray.some(function (it) {
        return it.card === card;
      });

      if (!basket.querySelector('.basket__popup')) {
        createPopup();
      }

      if (!isRepeat) {
        basketArray.push(data);

        fillBasket(data);
      }
    }
  };

  document.addEventListener('click', onDocumentClick, true);
})();
