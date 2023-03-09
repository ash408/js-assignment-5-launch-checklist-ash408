// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `
}

function validateInput(testInput) {
   testInput = testInput.trim();

   if(testInput === '') { return 'Empty'; }

   return (isNaN(testInput) ? "Not a Number" : "Is a Number");
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
   const faultyItems = document.getElementById('faultyItems');

   const pilotStatus = document.getElementById('pilotStatus');
   const copilotStatus = document.getElementById('copilotStatus');
   
   const launchStatus = document.getElementById('launchStatus');
   const fuelStatus = document.getElementById('fuelStatus');
   const cargoStatus = document.getElementById('cargoStatus');

   pilotStatus.textContent = `${pilot} is ready for launch`;
   copilotStatus.textContent = `${copilot} is ready for launch`;

   let error = false;

   function setError() {
      error = true;

      faultyItems.style.visibility = "visible";
      launchStatus.textContent = 'Shuttle not ready for launch';
      launchStatus.style.color = 'red';
   }

   if (fuelLevel < 10000) {
      setError();
      fuelStatus.textContent = 'Fuel level too low for launch';
   }
	
   if (cargoLevel > 10000) {
     setError();
     cargoStatus.textContent = 'Cargo mass too high for launch';
   }

   if (!error) {
      launchStatus.style.color = 'green';
      launchStatus.textContent = 'Shuttle is ready for launch';
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json();
    }).then(function(json) {
       return json;
    });

    return planetsReturned;
}

function pickPlanet(planets) {
   numPlanets = planets.length
   index = Math.floor(Math.random() * (numPlanets - 1 + 1) + 1);
   console.log(index)

   return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
