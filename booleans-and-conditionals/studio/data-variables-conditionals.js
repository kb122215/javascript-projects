// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let prepareForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
let isClearedForLiftOff = true;
if (astronautCount > 7) {
  isClearedForLiftOff = false;
  console.log("Astronaut count exceeds limit.");
}
// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready") {
  isClearedForLiftOff = false;
  console.log("Astronaut status not ready");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg >= maximumMassLimit) {
  isClearedForLiftOff = false;
  console.log("Total mass exceeds maximum mass limit.");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
  isClearedForLiftOff = false;
  console.log("Fuel temperature out of acceptable range.");
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%") {
  isClearedForLiftOff = false;
  console.log("Fuel level not at 100%.");
}

// add logic below to verify the weather status is clear
if (weatherStatus !== "clear") {
  isClearedForLiftOff = false;
  console.log("Weather status not clear.");
}
// Verify shuttle launch can proceed based on above conditions
if (isClearedForLiftOff && prepareForLiftOff) {
  console.log("All systems are a go! Initiating space shuttle launch sequence.");
  console.log("Date:", date);
  console.log("Time:", time);
  console.log("Astronaut Count:", astronautCount);
  console.log("Crew Mass (kg):", crewMassKg);
  console.log("Fuel mass (kg):", fuelMassKg);
  console.log("Shuttle Mass (kg):", shuttleMassKg);
  console.log("Total Mass (kg):", totalMassKg);
  console.log("Fuel Temperatture (Celsius):", fuelTempCelsius);
  console.log("Weather Status:", weatherStatus);
  console.log("Have a safe trip astronauts!");
} else {
  console.log("Launch operations aborted.");
}
