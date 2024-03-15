import { Dough, Topping, Donut } from './donutClasses.js';
import { animateText } from "./modules/animated-text.js";


const doughs = [
    new Dough('Plain', 'plain.png'),
    new Dough('Chocolate', 'chocolate.png'),
];
const toppings = [
    new Topping('Peach', 'peach.png'),
    new Topping('Persimmon', 'persimmon.png'),
];

function renderSelections() {
    const doughContainer = document.querySelector('#doughSelection');
    doughs.forEach(dough => {
        const wrapper = document.createElement('div'); 

        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'dough';
        radio.value = dough.getName();
        radio.onclick = () => selectDough(dough);

        const img = document.createElement('img'); 
        img.src = `images/${dough.getImage()}`; 
        img.alt = dough.getName(); 

        label.appendChild(radio); 
        label.appendChild(img); 
        label.appendChild(document.createTextNode(dough.getName())); 
        wrapper.appendChild(label); 
        doughContainer.appendChild(wrapper); 
    });

    const toppingContainer = document.querySelector('#toppingSelection');
    toppings.forEach(topping => {
        const wrapper = document.createElement('div'); 
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'topping';
        radio.value = topping.getName();
        radio.onclick = () => selectTopping(topping);

        const img = document.createElement('img'); 
        img.src = `images/${topping.getImage()}`; 
        img.alt = topping.getName(); 

        label.appendChild(radio); 
        label.appendChild(img); 
        label.appendChild(document.createTextNode(topping.getName())); 
        wrapper.appendChild(label);
        toppingContainer.appendChild(wrapper);
    });
}

let selectedDough = null;
let selectedTopping = null;

function selectDough(dough) {
    selectedDough = dough;
    updateDonutDisplay();
}

function selectTopping(topping) {
    selectedTopping = topping;
    updateDonutDisplay();
}

function updateDonutDisplay() {
    const display = document.querySelector('#donutDisplay');
    display.innerHTML = ''; 

    if (selectedDough && selectedTopping) {
        const donut = new Donut(selectedDough, selectedTopping);
        const img = document.createElement('img');
        img.src = donut.getDonutImage();
        img.alt = donut.getDescription();
        display.appendChild(img);
        display.classList.remove('default-message'); 
    } else {
        display.textContent = 'Please select a dough and a topping to see your favorite donut!';
        display.classList.add('default-message'); 
        animateText()
    }
}

renderSelections();

updateDonutDisplay();
