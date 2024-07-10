// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2 * Math.PI * radius);
}

// Code your missionDuration function here:
function missionDuration(numOrbits, radius = 2000, speed = 28000) {
  let circumference = orbitCircumference(radius);
  let distance = numOrbits * circumference;
  let time = distance / speed;
  return parseFloat(time.toFixed(2));
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arrayInput) {
  return arrayInput[Math.floor(Math.random() * arrayInput.length)];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, radius = 2000, speed = 28000) {
  let spacewalkTime = missionDuration(3, radius, speed);
  let oxygenUsed = candidate.o2Used(spacewalkTime);
  return `${
    candidate.name
  } will perform the spacewalk, which will last ${spacewalkTime} hours amd require ${oxygenUsed.toFixed(
    3
  )} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let crew = [candidateA, candidateC, candidateE];

let numOrbits = 5;
let orbitRadius = 2000;
let orbitalSpeed = 28000;
let totalDistance = orbitCircumference(orbitRadius) * numOrbits;
let totalDuration = missionDuration(numOrbits, orbitRadius, orbitalSpeed);
console.log(
  `The mission will travel ${totalDistance} km around the planet, and it will take ${totalDuration} hours to complete.`
);
let selectedCrewMember = selectRandomEntry(crew);
console.log(oxygenExpended(selectedCrewMember));
