let inputEl = document.getElementById("inputNum");
let convertEl = document.getElementById("convert");
let metrePara = document.getElementById("metre-p")
let volumePara = document.getElementById("volume-p")
let massPara = document.getElementById("mass-p")
const metre = 3.281
const liter = 0.22
const kilogram = 2.204
const feet = 0.3048
const gallon = 4.55
const pounds = 0.45



convertEl.addEventListener("click", function(){ 
    if (!inputEl.value){
        alert("Please enter a Value")
    }else{
    metresConverter()
    litreConverter()
    kilogramConverter()
    }} 
)


function metresConverter(){
    let resultMetresToFeet = metre * inputEl.value
    let resultFeetToMetres = inputEl.value * feet
    resultFeetToMetres = resultFeetToMetres.toFixed(3)
    resultMetresToFeet = resultMetresToFeet.toFixed(3)
    metrePara.innerHTML = `${inputEl.value}m = ${resultMetresToFeet}ft | ${inputEl.value}ft  = ${resultFeetToMetres}m `
}

function litreConverter(){
    let resultLitreToGallons = liter * inputEl.value
    let resultGallonsToLitres = gallon * inputEl.value
    resultLitreToGallons = resultLitreToGallons.toFixed(3)
    resultGallonsToLitres = resultGallonsToLitres.toFixed(3)
    volumePara.innerHTML = `${inputEl.value}L = ${resultLitreToGallons}gal | ${inputEl.value}gal = ${resultGallonsToLitres}L `
}

function kilogramConverter(){
    let resultKilogramsToPounds = kilogram * inputEl.value
    let resultPoundsToKilograms = pounds * inputEl.value
    resultKilogramsToPounds = resultKilogramsToPounds.toFixed(3)
    resultPoundsToKilograms = resultPoundsToKilograms.toFixed(3)
    massPara.innerHTML = `${inputEl.value}kg = ${resultKilogramsToPounds}lb | ${inputEl.value}lb = ${resultPoundsToKilograms}kg `
}
// convertEl.addEventListener("click", function(){ 
    
//     metrePara.innerHTML = `${inputEl.value}m = ${metre * inputEl.value}ft  `
//     } 
// )
//convert an inputEl number from metres to feet and vice versa
// | ${inputEl.value} Feet = ${resultFeetToMetres}




// #################### code before refactor ####################\\

// convertEl.addEventListener("click", function(){ 
//     let resultMetresToFeet = metre * inputEl.value
//     let resultFeetToMetres = inputEl.value * feet
//     resultFeetToMetres = resultFeetToMetres.toFixed(3)
//     resultMetresToFeet = resultMetresToFeet.toFixed(3)
//     metrePara.innerHTML = `${inputEl.value}m = ${resultMetresToFeet}ft | ${inputEl.value}ft  = ${resultFeetToMetres}m `
//     } 
// )

// convertEl.addEventListener("click", function(){
//     let resultLitreToGallons = liter * inputEl.value
//     let resultGallonsToLitres = gallon * inputEl.value
//     resultLitreToGallons = resultLitreToGallons.toFixed(3)
//     resultGallonsToLitres = resultGallonsToLitres.toFixed(3)
//     volumePara.innerHTML = `${inputEl.value}L = ${resultLitreToGallons}gal | ${inputEl.value}gal = ${resultGallonsToLitres}L `
// })

// convertEl.addEventListener("click", function(){
//     let resultKilogramsToPounds = kilogram * inputEl.value
//     let resultPoundsToKilograms = pounds * inputEl.value
//     resultKilogramsToPounds = resultKilogramsToPounds.toFixed(3)
//     resultPoundsToKilograms = resultPoundsToKilograms.toFixed(3)
//     massPara.innerHTML = `${inputEl.value}kg = ${resultKilogramsToPounds}lb | ${inputEl.value}lb = ${resultPoundsToKilograms}kg `
// })
















// function metre(){
//     let metre = (1 * 3.281)
//     metre.toFixed(3)
//     return metre
// }
// console.log(metre())
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound