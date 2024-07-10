// Code your selectRandomEntry function here:



let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(arrayInput) {
  return arrayInput[Math.floor(Math.random() * arrayInput.length)];
}
const selectedArray = [];
while (selectedArray.length < 3) {
  let randomNum = selectRandomEntry(idNumbers);
  if (!(selectedArray.includes(randomNum))) {
    selectedArray.push(randomNum);
    
  }
}

// Code your buildCrewArray function here:
function buildCrewArray(selectedArray, animals) {
  let crew = [];
  for (let id of selectedArray) {
    for (let animal of animals) {
      if (animal.astronautID === id) {
        crew.push(animal);
        break;
      }
    }
  }
  return crew;
}

console.log("Selected IDs:", selectedArray);

// Here are the candidates and the 'animals' array:
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

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];

// Code your template literal and console.log statements:
let crew = buildCrewArray(selectedArray, animals);
console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`);
