"use strict";var mainMenu=document.querySelector(".main-menu"),headerToggle=document.querySelector(".page-header__toggle"),closeButton=document.querySelector(".main-menu__close-button");mainMenu.classList.remove("main-menu--nojs"),headerToggle.addEventListener("click",function(){mainMenu.classList.remove("main-menu--closed"),mainMenu.classList.add("main-menu--opened")}),closeButton.addEventListener("click",function(){mainMenu.classList.add("main-menu--closed"),mainMenu.classList.remove("main-menu--opened")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mainMenu.classList.contains("main-menu--opened")&&(mainMenu.classList.remove("main-menu--opened"),mainMenu.classList.add("main-menu--closed"))});