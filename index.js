/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")
let lengthyEl = document.getElementById("lengthy")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPounds = 2.204


convertBtn.addEventListener("click", function() {
    let firstRez = (inputEl.value*meterToFeet).toFixed(3)
    let secondRez = (inputEl.value/meterToFeet).toFixed(3)
    lengthyEl.textContent = `${inputEl.value} meters = ${firstRez} feet | ${inputEl.value} feet = ${secondRez} meters`
})

convertBtn.addEventListener("click", function() {
    let volumeValue = inputEl.value
    volumeEl.textContent = `${volumeValue} liters = ${(volumeValue / literToGallon).toFixed(3)} gallons | ${volumeValue} gallons = ${(volumeValue * literToGallon).toFixed(3)} liters` 
})
convertBtn.addEventListener("click", function() {
    let massValue = inputEl.value
    massEl.textContent = `${massValue} kilos = ${(massValue*kiloToPounds).toFixed(3)} pounds 
    | ${massValue} pounds = ${(massValue/kiloToPounds).toFixed(3)} kilos`
    
})