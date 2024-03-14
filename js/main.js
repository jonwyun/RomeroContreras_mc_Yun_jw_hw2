import { Dough, Topping, Donut } from './donutCLasses.js';

// Sample doughs and toppings
const doughs = [
    new Dough('Plain', 'plain.jpg'),
    new Dough('Chocolate', 'chocolate.jpg'),
];
const toppings = [
    new Topping('Sprinkles', 'sprinkles.jpg'),
    new Topping('Nuts', 'nuts.jpg'),
];

// Function to render selections
function renderSelections() {
    const doughContainer = document.querySelector('#doughSelection');
    doughs.forEach(dough => {
        const wrapper = document.createElement('div'); // Create a wrapper for each dough

        const button = document.createElement('button');
        button.textContent = dough.getName();
        button.onclick = () => selectDough(dough);

        const img = document.createElement('img'); // Create an img element
        img.src = `images/${dough.getImage()}`; // Set the source of the image
        img.alt = dough.getName(); // Set the alt text

        wrapper.appendChild(img); // Append the image to the wrapper
        wrapper.appendChild(button); // Append the button to the wrapper
        doughContainer.appendChild(wrapper); // Append the wrapper to the container
    });

    const toppingContainer = document.querySelector('#toppingSelection');
    toppings.forEach(topping => {
        const wrapper = document.createElement('div'); // Create a wrapper for each topping

        const button = document.createElement('button');
        button.textContent = topping.getName();
        button.onclick = () => selectTopping(topping);

        const img = document.createElement('img'); // Create an img element
        img.src = `images/${topping.getImage()}`; // Set the source of the image
        img.alt = topping.getName(); // Set the alt text

        wrapper.appendChild(img); // Append the image to the wrapper
        wrapper.appendChild(button); // Append the button to the wrapper
        toppingContainer.appendChild(wrapper); // Append the wrapper to the container
    });
}

let selectedDough = null;
let selectedTopping = null;

// Function to handle dough selection
function selectDough(dough) {
    selectedDough = dough;
    updateDonutDisplay();
}

// Function to handle topping selection
function selectTopping(topping) {
    selectedTopping = topping;
    updateDonutDisplay();
}

// Function to update the donut display based on selections
function updateDonutDisplay() {
    const display = document.querySelector('#donutDisplay');
    display.innerHTML = ''; // Clear previous content

    if (selectedDough && selectedTopping) {
        const donut = new Donut(selectedDough, selectedTopping);
        const img = document.createElement('img');
        img.src = donut.getDonutImage();
        img.alt = donut.getDescription();
        display.appendChild(img);
    }
}

// Initial render
renderSelections();
