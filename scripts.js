$(document).ready(onReady); // load

function onReady() {
    console.log('Hear, hear!') // test

    $('#generate-button').on('click', gameOn); //event listener for generate button
} // end onReady function

console.log('Game on!'); // test

function gameOn(event) {
    event.preventDefault(); // prevent default response
    console.log('generate!') // test if function links to button click
    $('main').append()


} // end function gameOn








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

