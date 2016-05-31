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
animals.push({
    username: 'MorrisMoose',
    tagline: 'No fair!',
    noises: ['mlaaargh', 'meep', 'momp', 'mooooooph']
});
animals.push({
    username: 'Clippy',
    tagline: 'Would you like help?',
    noises: ['boing', 'ping', 'yoing', 'sorry!']
});

// End Array Exercise -----------------------------------


// Nested Data Exercise ---------------------------------
var friendsList = [];
var friends = friendsList;
friends.push(animals[1].username);
friends.push(animals[3].username);

var relationships = {};
relationships.friends = friends;

var matches = [];
relationships.matches = matches;

relationships.matches.push(animals[2].username);

animals.forEach(function (elem) {elem.relationships = relationships});
// End Nested Data Exercise -----------------------------


// Functional Exercise ----------------------------------

// End Functional Exercise ------------------------------
