function changeAnimal() {
    let Animal = window.prompt ('What is your favorite animal?');
document.getElementById('Animal').innerText = Animal; 
}
function changeTime() {
    let Time = window.prompt ('What time do you usually wake up?');
document.getElementById('Time').innerText = Time;
}
function changeLocation() {
    let Location = window.prompt ('Where is your favorite place to go?');
document.getElementById('Location').innerText = Location;
}
function changeActivity()  {
    let Activity = window.prompt ('What is your favorite thing to do? (Jogging, Cooking, etc...');
document.getElementById('Activity').innerText = Activity;
}
function changeFood() {
    let food = window.prompt('What is your favorite food?');
document.getElementById('food').innerText = food;
}
function changeName() {
    let name = window.prompt ('What do you want to name your animal?');
    document.getElementById('name').innerText = name;
}
function changePronoun() {
    let pronoun = window.prompt('Is your animal a he or she?');
    console.log(pronoun);
    let pronounElements = document.querySelectorAll('.pronoun')
    for (let i = 0; i < pronounElements.length; i++)  {
        pronounElements[i].innerText = pronoun;
    }
}

document.getElementById('change-animal-button').onclick = changeAnimal
document.getElementById('change-name-button').onclick = changeName
document.getElementById('change-time-button').onclick = changeTime
document.getElementById('change-location-button').onclick = changeLocation
document.getElementById('change-activity-button').onclick = changeActivity
document.getElementById('change-food-button').onclick = changeFood
document.getElementById('change-pronoun-button').onclick = changePronoun

console.log('This is working');



let value = 0;
document.getElementById('value').innerText = value;
function add1() {
    value = value + 1
    document.getElementById('value').innerText = value;
}
document.getElementById('add').onclick = add1

function subtract1() {
    value = value - 1
    document.getElementById('value').innerText = value;
}
document.getElementById('subtract').onclick = subtract1

function fsubtract10() {
    value = value - 10
    document.getElementById('value').innerText = value;
}
document.getElementById('subtract10').onclick = fsubtract10

function fadd10() {
    value = value + 10
    document.getElementById('value').innerText = value;
}
document.getElementById('add10').onclick = fadd10
