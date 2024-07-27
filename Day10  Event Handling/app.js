// Tasks/Activities:

// Activity 1: Basic Event Handling

// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.

let Task_1 = document.querySelector('#task-1');
let btn = document.querySelector('#btn1');
btn.addEventListener('click', event => {
    event.preventDefault()
    Task_1.innerHTML = "Task 1";
})

// • Task 2: Add a double-click event listener to an image that toggles its visibility.

const image = document.getElementById('myImage');
image.addEventListener('dblclick', function () {
    if (image.style.display === 'none') {
        image.style.display = 'block';
        console.log('if');
    } else {
        image.style.display = 'none';
        console.log('else');
    }
});

// Activity 2: Mouse Events

// • Task 3: Add a mouseover event listener to an element that changes its background color.

let p = document.querySelector('#change')
p.addEventListener('mouseover', () => {
    p.style.backgroundColor = 'lightblue';
})

// • Task 4: Add a mouseout event listener to an element that resets its background color.

p.addEventListener('mouseout', () => {
    p.style.backgroundColor = 'white';
})

// Activity 3: Keyboard Events

// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const input = document.querySelector('#input');
input.addEventListener('change', function () {
    console.log('onchange event')
})

// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

const inputField = document.getElementById('myInput');
const displayParagraph = document.getElementById('displayText');
inputField.addEventListener('keyup', function () {
    displayParagraph.textContent = inputField.value;
});

// Activity 4: Form Events

// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('#form')
form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(email.value);
    console.log(password.value);
    email.value = ''
    password.value = '';
})

// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const selectElement = document.getElementById('mySelect');
const displayParagraphMain = document.getElementById('selectedValue');
selectElement.addEventListener('change', function () {
    displayParagraphMain.innerHTML = `Selected value: ${selectElement.value}`;
});

// Activity 5: Event Delegation

// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById('myList');
        list.addEventListener('click', event =>{
            if (event.target && event.target.nodeName === 'LI') {
                console.log(event.target.innerHTML);
            }
        });

// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.



// Feature Request:
// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.
// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.
// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.

// Achievement:
// By the end of these activities, students will:
// • Add and handle basic events like click, double-click, mouseover, mouseout, keydown, and keyup.
// • Understand and handle form events.
// • Implement event delegation to manage events on dynamically added elements.
// • Make web pages interactive by responding to various user actions.