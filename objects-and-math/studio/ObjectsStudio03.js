// Code your crewMass function here:
function crewMass(crew) {
  let totalMass = 0;
  for (let member of crew) {
    totalMass += member.mass;
  }
  return parseFloat(totalMass.toFixed(1));
}

// Code your fuelRequired function here:
function fuelRequired(crew, rocketMass = 75000) {
  let totalCrewMass = crewMass(crew);
  let totalMass = rocketMass + totalCrewMass;
  

  let baseFuelRequired = totalMass * 9.5;

  let extraFuel = 0;
  for (let member of crew) {
    if (member.species === 'dog' || member.species === 'cat') {
      extraFuel += 200;
    } else {
      extraFuel += 100;
    }
  }


  let totalFuelRequired = Math.ceil(baseFuelRequired + extraFuel);

  return totalFuelRequired;
}
// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
let crew = [candidateB, candidateD, candidateF];
 
let totalCrewMass = crewMass(crew);
let totalFuelRequired = fuelRequired(crew);
console.log(`The mission has a launch mass of ${75000 + totalCrewMass} kg and requires ${totalFuelRequired} kg of fuel.`);
 