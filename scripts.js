//Use this file to implement Part One of your project

// Object Exercise --------------------------------------
var animal = {};
animal.username = "ShaNeighNeigh";
animal["tagline"] = "Where's Mr. Ed?";

var noises = [];
animal["noises"] = noises;

var propertyCount = 0;
for (var key in animal) {
    propertyCount++;
    if (key === "username") console.log("Hi, my name is " + animal[key]);
    else if (key === "tagline") console.log("I like to say " + animal[key]);
}
// End Object Exercise ----------------------------------


// Array Exercise ---------------------------------------
var noiseArray = ["woof"];
noiseArray.unshift("meow");
noiseArray.push("ribbit");
noiseArray[noiseArray.length] = "cheep";

animal.noises = noiseArray;

var animals = [];
animals.push(animal);
var quackers = {
    username: 'DaffyDuck',
    tagline: 'Yippeee!',
    noises: ['quack', 'honk', 'sneeze', 'growl']
};
animals[animals.length] = quackers;
// End Array Exercise -----------------------------------


// Nested Data Exercise ---------------------------------

// End Nested Data Exercise -----------------------------


// Functional Exercise ----------------------------------

// End Functional Exercise ------------------------------
