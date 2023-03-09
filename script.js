// Write your JavaScript code here!

window.addEventListener("load", function() {

   const launchForm = document.getElementById('launchForm')
   
   launchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const pilot = document.querySelector('input[name=pilotName]').value;
      const copilot = document.querySelector('input[name=copilotName]').value;
      const fuelLevel = document.querySelector('input[name=fuelLevel]').value;
      const cargoLevel = document.querySelector('input[name=cargoMass]').value;
	

      function validate(validationString, valid){
         const invalidString = 'Make sure to enter valid information for each field!';
         const emptyString = 'All fields are required!';
	
         if(! (validationString === valid)) {
            validationString === "Empty" ? window.alert(emptyString) : window.alert(invalidString);
	    return false;
         } else {
	   return true;
         }
      }

      if (!validate(validateInput(pilot), 'Not a Number')) return;
      if (!validate(validateInput(copilot), 'Not a Number')) return;
      if (!validate(validateInput(fuelLevel), 'Is a Number')) return;
      if (!validate(validateInput(cargoLevel), 'Is a Number')) return;
      
      formSubmission(document, pilot, copilot, fuelLevel, cargoLevel);
   });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let planet = pickPlanet(listedPlanets)
      console.log(planet)

      addDestinationInfo(document, planet.name, planet.diameter, planet.star,
	      planet.distance, planet.moons, planet.image)
   })
   
});
