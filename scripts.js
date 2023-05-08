$(document).ready(onReady); // load

function onReady() {
    console.log('Hear, hear!') // test

    $('#generate-button').on('click', gameOn); //event listener for generate button

    $('main').on('click', '.yellow-button', makeYellow); // event listener for yellow button

    $('main').on('click', '.delete-button', goAway); // event listener for delete button

} // end onReady function


console.log('Game on!'); // test

let lineCounter = 0;

function gameOn(event) { // event handler for generate button
    event.preventDefault(); // prevent default response
    console.log('generate!') // test if function links to button click
    
    lineCounter++;

   
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
    $(this).parent().css('background-color', 'yellow');


} // end makeYellow function

function goAway() { // event handler for go away button
    console.log('go away button works!') // log to test
} // end goAway function




// Using jQuery, append a <div> element when you click the button. It should append a 
// new div each time you click the button.

// Inside the <div> element you created in the previous step, create a <p> element 
// that shows how many times you have clicked the "Generate" button from the first step. 
// It should reflect the count for that step - the first div you made should be 1, the second 2,
//  etc. (You can use the same append from the previous step)

// Inside the <div> element created in step two, append two <button> elements with text 
// of "Yellow" & "Delete". (You can use the same append from the previous step)

// In a CSS file, any <div> created using the "Generate" button should start with 
// red as it's background-color.

// Clicking a "Yellow" <button> should change its parent background-color from red to yellow.

// Clicking a "Delete" <button> should remove its parent <div> and that <div>s 
// children (including the clicked on "Delete" button).

// No need to do anything beyond the challenge described above. Once you are complete, 
// check your code into a GitHub repo and submit via this application.

