const flightPower = document.getElementById("flight");
const mindPower = document.getElementById("mindreading");
const xrayPower = document.getElementById("xray");

function changeFlight (power, whichClass) {
    power.classList.toggle(whichClass);
}

// function activatePower() {
//     flightPower.classList = "enabled";
//     mindPower.classList = "mindReading";
//     xrayPower.classList = "xray";

// }
// function disablePower () {
//     flightPower.classList = ".powerDisabled";
//     mindPower.classList = ".powerDisabled";
//     xrayPower.classList = ".powerDisabled";

// }

let allPowers = document.querySelectorAll("section");
console.log(allPowers)

function disablePower () {
    for (var i = 0; i < allPowers.length; i++) {
      allPowers.item(i).classList = ".powerDisabled"
    }
}

function activatePower () {
    for (var i = 0; i < allPowers.length; i++) {
      if (allPowers.item(i).id === "flight") {
        allPowers.item(i).classList = "enabled";
      }
      else if (allPowers.item(i).id === "mindreading") {
        allPowers.item(i).classList = "mindReading";
    }
    else {
        allPowers.item(i).classList = "xray";
    }
  }
}





document.querySelector("#activate-flight").addEventListener("click", function() {changeFlight(flightPower, "enabled")});
document.querySelector("#activate-mindreading").addEventListener("click", function() { changeFlight(mindPower, "mindReading")});
document.querySelector("#activate-xray").addEventListener("click", function() { changeFlight(xrayPower, "xray")});
document.querySelector("#activate-all").addEventListener("click", function() { activatePower()});
document.querySelector("#deactivate-all").addEventListener("click", function() { disablePower()});












