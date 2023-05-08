$(document).ready(onReady); // load

function onReady() { // start onReady function
    console.log('Hear, hear!') // test

    $('#generate-button').on('click', gameOn); //event listener for generate button

    $('main').on('click', '.yellow-button', makeYellow); // event listener for yellow button

    $('main').on('click', '.delete-button', goAway); // event listener for delete button

} // end onReady function


console.log('Game on!'); // test

let lineCounter = 0; // declare variable to count lines added and set intial value to 0

function gameOn(event) { // event handler for generate button
    event.preventDefault(); // prevent default response
    console.log('generate!') // test if function links to button click
    
    lineCounter++; // increment line counter on each click

   // add new div to section main with an value for lineCounter, and a button each for yellow and delete
    $('main').append(`
        <div class="red-field">
        <p>${lineCounter}</p>
        <div class="yellow-button"><button id="make-yellow">MAKE YELLOW!</button></div>
        <div class="delete-button"><button id="go-away">GO AWAY!</button></div>
        </div>
    `)
} // end function gameOn

function makeYellow() { //event handler for make yellow button
    console.log('yellow button works!'); // log to test
    $(this).parent().css('background-color', 'yellow'); // change background color to yellow for each div section
} // end makeYellow function

function goAway() { // event handler for go away button
    console.log('go away button works!') // log to test
    $(this).parent().remove(); // remove each associated div section on click
} // end goAway function