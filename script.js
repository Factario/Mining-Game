let Value = 0;
let ValueCounter = document.getElementById("value");
let copperCount = 0;
let ironCount = 0;
let steelCount = 0;
let blackSteelCount = 0;
let mythrilCount = 0;
let adamantiteCount = 0;
let runiteCount = 0;


let rectangle = document.getElementById("copper");
rectangle.addEventListener("click", function() {
    Value += 1;
    copperCount ++;
    ValueCounter.innerHTML = "Value: " + Value;
    copper.innerHTML = "copper: " + copperCount;
});

let rectangle1 = document.getElementById("iron");
rectangle1.addEventListener("click", function() {
    Value += 2;
    ironCount ++;
    ValueCounter.innerHTML = "Value: " + Value;
    iron.innerHTML = "iron: " + ironCount
});

let rectangle2 = document.getElementById("steel");
rectangle2.addEventListener("click", function() {
    Value += 5;
    steelCount ++;
    ValueCounter.innerHTML = "Value: " + Value;
    steel.innerHTML = "steel: " + steelCount
});

let rectangle3 = document.getElementById("blackSteel");
rectangle3.addEventListener("click", function() {
    Value += 10;
    blackSteelCount ++;
    ValueCounter.innerHTML = "Value: " + Value;
    blackSteel.innerHTML = "black steel: " + blackSteelCount
});

let rectangle4 = document.getElementById("mythril");
rectangle4.addEventListener("click", function() {
    Value += 15;
    mythrilCount ++;
    ValueCounter.innerHTML = "Value: " + Value;
    mythril.innerHTML = "mythril: " + mythrilCount
});

let rectangle5 = document.getElementById("adamantite");
rectangle5.addEventListener("click", function() {
    Value += 20;
    adamantiteCount ++;
    ValueCounter.innerHTML = "Value: " + Value;
    adamantite.innerHTML = "adamantite: " + adamantiteCount
});

let rectangle6 = document.getElementById("runite");
rectangle6.addEventListener("click", function() {
    Value += 25;
    runiteCount ++;
    ValueCounter.innerHTML = "Value: " + Value;
    runite.innerHTML = "runite: " + runiteCount
});

let button = document.getElementById("button");
button.addEventListener("click", function() {
    if(copperCount===10 && ironCount===10 && steelCount===10 && blackSteelCount===10 && mythrilCount===10 && adamantiteCount===10 && runiteCount===10) {
            alert("You win")
        } else {
            alert("You need 10 of everything")
        }
});