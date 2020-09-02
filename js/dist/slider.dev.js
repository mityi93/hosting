"use strict";

var item = document.querySelectorAll('.items'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    dots = document.querySelectorAll('.dot');
var index = 0;

var activeSlide = function activeSlide(n) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = item[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      items = _step.value;
      items.classList.remove('active'); // удаляет все class active
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  item[n].classList.add('active'); //добавлетя class active к нужному элемету
};

var activeDot = function activeDot(n) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = dots[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      dot = _step2.value;
      // удаляет class active
      dot.classList.remove('active');
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  dots[n].classList.add('active');
};

var CurrentSlide = function CurrentSlide(ind) {
  activeSlide(ind);
  activeDot(ind);
};

var nextSlide = function nextSlide() {
  clearInterval(interval); //остановка автоматического переключения 

  if (index == item.length - 1) {
    //если index на последней точке то ему присваевается начальное значение index=0 и выполняется функция activeSlide и activeDot
    index = 0;
    CurrentSlide(index);
  } else {
    //если index не на последней точке то он делает 1 шаг вперед
    index++;
    CurrentSlide(index);
  }
};

var prevSlide = function prevSlide() {
  if (index == 0) {
    index = item.length - 1;
    CurrentSlide(index);
  } else {
    index--;
    CurrentSlide(index);
  }
};

dots.forEach(function (item, indexDot) {
  item.addEventListener('click', function () {
    index = indexDot;
    CurrentSlide(index);
    clearInterval(interval); //остановка автоматического переключения 
  });
});
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
var interval = setInterval(nextSlide, 6000);