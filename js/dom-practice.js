
// ---- Event Handler

// Function to modify the text content of the paragraph
// const changeText = function () {
//     const p = document.querySelector('p');
//
//     p.textContent = "I changed because of an event handler property.";
// }
//
// // Add event handler as a property of the button element
// const button = document.querySelector('button');
// button.onclick = changeText;

// hello = () => {
//     return "Hello World!";
// }

// ---- Event Listeners

// Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an event listener.";
}

// Listen for click event
const button = document.querySelector('button');
button.addEventListener('click', changeText);

// At first look, event listeners seem very similar to event handler properties, but they have a few advantages. We can set multiple event listeners on the same element, as demonstrated in the example below.
// -------------------------------------------------------------------
// const p = document.querySelector('p');
// const button = document.querySelector('button');
//
// const changeText = () => {
//     p.textContent = "Will I change?";
// }
//
// const alertText = () => {
//     alert('Will I alert?');
// }
//
// // Multiple listeners can be added to the same event and element
// button.addEventListener('click', changeText);
// button.addEventListener('click', alertText);
//
// // Remove alert function from button element
// button.removeEventListener('click', alertText);