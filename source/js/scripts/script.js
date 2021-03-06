(function () {
  "use strict";
  var mainMenu = document.querySelector(".main-menu");
  var headerToggle = document.querySelector(".page-header__toggle");
  var closeButton = document.querySelector(".main-menu__close-button");

  if (mainMenu) {
    mainMenu.classList.remove("main-menu--nojs");
  }

  if (headerToggle) {
    headerToggle.addEventListener("click", function () {
      mainMenu.classList.remove("main-menu--closed");
      mainMenu.classList.add("main-menu--opened");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      mainMenu.classList.add("main-menu--closed");
      mainMenu.classList.remove("main-menu--opened");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mainMenu.classList.contains("main-menu--opened")) {
        mainMenu.classList.remove("main-menu--opened");
        mainMenu.classList.add("main-menu--closed");
      }
    }
  });
})();
