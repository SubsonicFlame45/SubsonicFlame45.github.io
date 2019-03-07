function changeAnimal() {
    let Animal = window.prompt ('What is your favorite animal?.');
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
document.getElementById('change-animal-button').onclick = changeAnimal
document.getElementById('change-time-button').onclick = changeTime
document.getElementById('change-location-button').onclick = changeLocation
document.getElementById('change-activity-button').onclick = changeActivity
document.getElementById('change-food-button').onclick = changeFood

console.log('This is working');
