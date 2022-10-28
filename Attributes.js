//How to get, set, and remove attributes for an element using:
//getAttribute(), setAttribute(), removeAttribute(), and hasAttribute()


var elem = document.querySelector('#lunch');


//GET the value of an attribute
const sandwich = elem.getAttribute('data-sandwich');

//SET an attribute value
elem.setAttribute('data-sandwich', 'turkey');

//REMOVE an attribute
elem.removeAttribute('data-chips');

//Check if an element has an attribute
if(elem.hasAttribute('data-drink')) {
    console.log('Add a drink!');
}

//These methods can also be used to manipulate other types of attributes-things like: id, tabindex, name and so on.

