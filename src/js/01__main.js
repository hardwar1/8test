'use strict';

document.addEventListener('DOMContentLoaded', function () {
  function qOne(selector) {
    return document.querySelector(selector);
  }

  const popap = qOne('.popap');

  qOne('.btn').addEventListener('click',
    () => popap.classList.toggle('popap--active')
  );

  qOne('.popap__close').addEventListener('click', function () {
    this.closest('.popap').classList.remove('popap--active');
  });

});