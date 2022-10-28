const elem = document.querySelector('#sandwich');


// // Get a style
// // If this style is not set as an inline sty
// le directly on the element, it returns an em
// pty string
// // ex. <div id="sandwich" style="background-
// color: green"></div>

const bgColor = elem.style.backgroundColor;
// this will return "green"

const fontWeigth = elem.style.fontWeigth;
// this will return ""

//set a style
elem.style.backgroundColor = "purple";

//Computed Styles
//use this to get the actual computed style fromn an element.

const bColor = window.getComputedStyle(elem).backgroundColor;



