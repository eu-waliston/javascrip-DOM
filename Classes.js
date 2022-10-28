
//how to add, remove, toggle, and check for classes on an element

const elem = document.querySelector("#sandwich");

//add a class
elem.classList.add('turkey');

//remoe a class
elem.classList.remove('tuna');

//Toggle a class
//(Add the class if it´s not already on the alement, remove it if it is.)
elem.classList.toggle('tomato');

//check if an element has a specific class
if(elem.classList.contains('mayo')) {
    console.log('add mayo!');
}


//ClassName
const elem2 = document.querySelector('div');

//get all of the classes on an element
const elemClasses = elem.className;

//Add a class to an element 
elem.className += ' vanilla-js';

//Completely replce all classes on an element
elem.className += 'new-class';

