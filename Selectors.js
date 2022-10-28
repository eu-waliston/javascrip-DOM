//How to get elements in the DOM

//querySelectorAll() -> You can use any valid CSS selector.


//Get all elements with the .bg-red class
const elemsRed = document.querySelectorAll('.bg-red');

//Get all elements with the [data-snack] atribute
const elemenSnacks = document.querySelectorAll('[data-snackz]');

//querySelector() -> to find the first matching element on a page.

//The first div
const elem = document.querySelector('div');

//The first div with the bg-red class
const elemRed =  document.querySelector('.bg-red');

// The first div with a data attribute of snack equal to carrots
const elemCarrots = document.querySelector('[data-snack="carrots"]');

// An element that doesn't exist
const elemNone = document.querySelector('.bg-orange');

// Verify element exists before doing anything with it
if(elemNone){
    //do something....
}


//matches() ->  Use matches() to check if an element would be selected by a particular selector or set of selectors. Returns true if the element is a match, and false when it’s not

const elem2 = document.querySelector('#sandwich');
if(elem2.matches('.turkey')){
    console.log(`It matches!`);
}  else {
    console.log(`Not a match... :/ `);
}

if(!Element.prototype.matches){
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}