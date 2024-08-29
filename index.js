/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el");
let lengthEl = document.getElementById("length-results");
let volumeEl = document.getElementById("volume-results");
let massEl = document.getElementById("mass-results");

convertBtn.addEventListener("click", function () {
    convertLength();
    convertVolume();
    convertMass();
});

function convertLength() {
    meters = inputEl.value / 3.281;
    feet = inputEl.value * 3.281;
    lengthEl.innerText = `${inputEl.value} meters = ${feet.toFixed(2)} feet | ${inputEl.value} feet = ${meters.toFixed(2)}`;
}

function convertVolume() {
    liters = inputEl.value / 0.264;
    gallon = inputEl.value * 0.264;
    volumeEl.innerText = `${inputEl.value} liters = ${gallon.toFixed(2)} gallons | ${inputEl.value} gallons = ${liters.toFixed(2)} liters`;
}

function convertMass() {
    kilograms = inputEl.value / 2.204;
    pounds = inputEl.value * 2.204;
    massEl.innerText = `${inputEl.value} kilograms = ${pounds.toFixed(2)} gallons | ${inputEl.value} gallons = ${kilograms.toFixed(2)} kilograms`;
}