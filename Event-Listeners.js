//How to listen for browser events and run callback functions when they happen.

//addEventListener()
//this method will listen for events on an element
const btn = document.querySelector('#clik-me');

btn.addEventListener('click', function (event) {
    console.log(event); //the event details
    console.log(event.target); // the clicked element
}, false)


//Multiple Targets

//The vanilla JavaScript addEventListener() function requires you to pass in a specific, individual element to listen to.

//this won´t work!
const btns = document.querySelectorAll('.click-me')

btns.addEventListener('click', function (event) {
    console.log(event); //The event details 
    console.log(event.target); //the clicked element
}, false);

// For performance reasons, you also SHOULD NOT loop over each
// element and attach an even listener to it.

/**
* This works, but it's bad for performance
* DON'T DO IT!
*/

const btns2 = document.querySelectorAll('.click-me');

Array.from(btns2).forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        console.log(event); //the event details
        console.log(event.target); //The clicked element
    }, false);
});


//Fortunately, there's a really easy and performant way to loop over each alement, for this we have: event delegation or event bubbling

//Listen for clicks on the entire window
window.addEventListener('click', function (event) {
    //If the clicked element has the '.click-me' class, it´s a match!
    if (event.target.matches('.click-me')) {
        //Do something;
    }
}, false)

// NOTE: don’t forget to include a polyfill for matches() if you use it.

//Multiple Events 

//In vanilla JS, each event type reuires it´s own event listener. Unfortunately, you can´t pass in multiple events to a listener 

/**
* This won't work!
*/

const btns3 = document.querySelectorAll('.click-me');

btns3.addEventListener('click, scrolls', function(event){
    console.log(event); //the event details
    console.log(); //the clicked element
}, false);


// Instead, create a named function and pass that into your event
// listener. This lets you avoid writing the same code over and over
// again, and keeps your code more DRY.


//Setup our function to run on various events
const logTheEvent = function(event){
    console.log(`The following event happened ${event.type}`);
}

//add out event lisnteners
document.addEventListener('click', logTheEvent,false);
window.addEventListener('scroll', logTheEvent, false);

//Use Capture
/* 
The last argument in addEventListener() is useCapture,
and it specifies whether or not you want to “capture” the event.
For most event types, this should be set to false. But certain
events, like focus, don’t bubble.

Setting useCapture to true allows you to take advantage of
event bubbling for events that otherwise don’t support it.
*/

//Listen for all focus events in the document 
document.addEventListener('focus', function(event){
    // Run functions whenever an element in the document comes into focus
}, true);





