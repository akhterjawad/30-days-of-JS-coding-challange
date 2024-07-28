// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements

// • Task 1: Select an HTML element by its ID and change its text content.

let element = document.getElementById('Task-1')
element.innerHTML = 'object'

// • Task 2: Select an HTML element by its class and change its background color.

let elements = document.getElementsByClassName('Task-2');
if (elements.length > 0) {
    elements[0].style.backgroundColor = 'lightblue';
}

// Activity 2: Creating and Appending Elements

// • Task 3: Create a new div element with some text content and append it to the body.

// Create a new div element
let newDiv = document.createElement('div');
// Create a text node with some content
let newContent = document.createTextNode('This is a new div element with some text content.');
// Append the text node to the new div
newDiv.appendChild(newContent);
// Append the new div to the body
document.body.appendChild(newDiv);

// • Task 4: Create a new li element and add it to an existing ul list.


let newListItem = document.createElement('li');
let newContentMain = document.createTextNode('Item 3');
newListItem.appendChild(newContentMain);
let ul = document.getElementById('myList');
ul.appendChild(newListItem);

// Activity 3: Removing Elements

// • Task 5: Select an HTML element and remove it from the DOM.

let remove = document.querySelector('#remove').remove()

// • Task 6: Remove the last child of a specific HTML element.

let ulMain = document.getElementById('myListMain');
if (ulMain.lastElementChild) {
    ulMain.removeChild(ulMain.lastElementChild);
}

// Activity 4: Modifying Attributes and Classes

// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

let imgElement = document.getElementById('myImage');
imgElement.setAttribute('src', "./aj store.jpeg");

// • Task 8: Add and remove a CSS class to/from an HTML element.

function addClass() {
    let element = document.getElementById('myElement');
    element.classList.add('highlight');
}

// JavaScript to remove a class
function removeClass() {
    let element = document.getElementById('myElement');
    element.classList.remove('highlight');
}

// JavaScript to toggle a class
function toggleClass() {
    let element = document.getElementById('myElement');
    element.classList.toggle('highlight');
}

// Activity 5: Event Handling

// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.

let paragraph = document.querySelector('#myParagraph')
let button = document.getElementById('myButton')
button.addEventListener('click', () => {
    paragraph.innerHTML = 'new text'
})

// • Task 10: Add a mouseover event listener to an element that changes its border color.

paragraph.addEventListener('mouseover', () => {
    paragraph.style.backgroundColor = 'lightblue';
})
paragraph.addEventListener('mouseout', () => {
    paragraph.style.backgroundColor = 'white';
})

// Feature Request:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.

// Achievement:
// By the end of these activities, students will:
// • Select and manipulate DOM elements using JavaScript.
// • Create and append new elements to the DOM.
// Remove elements from the DOM.
// Modify attributes and classes of HTML elements.
// Add and handle events to make web pages interactive.

//<=================== Complete =====================>//