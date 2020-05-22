$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
   
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');

    }
  });


});


(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";
var categoryHtml = "snippets/category-snippet.html";
var categoryLunch = "snippets/single-category-snippet.html";
var categoryDinner = "snippets/dinner-snippet.html";
var categorySweet = "snippets/sweets-snippet.html";
var categoryBreakfast = "snippets/breakfast-snippet.html #section4";
var aboutus = "snippets/about-snippet.html";
var special = "snippets/specials-snippet.html";
var clickb =  Math.floor((Math.random() * 10) + 1);
clickb = Math.floor(clickb/2);

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/A.jpg'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

// Load the menu categories view
dc.incrementcount = function () {
 
  clickb = clickb + 1;
   console.log(clickb);
  if(clickb == 2){
    console.log("1 click");
    ajaxUtils.sendGetRequest(
    categoryLunch,function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },false);
  }
  else if(clickb == 3){
    ajaxUtils.sendGetRequest(
    categorySweet,function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },false);
  }
  else if(clickb == 4){
    ajaxUtils.sendGetRequest(
    categoryBreakfast,function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },false);
  }
  else{
     console.log("many click");
     ajaxUtils.sendGetRequest(
    categoryDinner,function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },false);
  }
  
}


dc.loadMenuCategories = function () {
  showLoading("#main-content");
  ajaxUtils.sendGetRequest(
    categoryHtml,function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },false);
};
dc.loadLunch = function () {
  showLoading("#main-content");
  ajaxUtils.sendGetRequest(
    categoryLunch,function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },false);
};
dc.loadDinner = function () {
  showLoading("#main-content");
  ajaxUtils.sendGetRequest(
    categoryDinner,function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },false);
};
dc.loadSweets = function () {
  showLoading("#main-content");
  ajaxUtils.sendGetRequest(
    categorySweet,function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },false);
};
dc.loadBreakfast = function () {
  showLoading("#main-content");
  ajaxUtils.sendGetRequest(
    categoryBreakfast,function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },false);
};
dc.About = function () {
  showLoading("#main-content");
  ajaxUtils.sendGetRequest(
    aboutus,function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },false);
};
window.dc = dc;
window.clickb = clickb;
})(window);
