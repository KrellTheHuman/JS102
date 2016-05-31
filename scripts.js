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

animals.forEach(function (elem) {
    elem.relationships = relationships
});
// End Nested Data Exercise -----------------------------


// Function Exercise ------------------------------------
function AnimalTestUser(username) {
    var user = {username: username};
    if (arguments.length > 1) {
        user.otherArgs = Array.prototype.slice.call(arguments, 1);
    }
    return user;
}

var testSheep = AnimalTestUser("CottonBall", {"Loves Dancing": true}, [1, 2, 3]);
console.log(testSheep);

function AnimalCreator(username, species, tagline, noises) {
    return {
        username: username,
        species: species,
        tagline: tagline,
        noises: noises,
        friends: []
    };
}

function addFriend(animal, friend) {
    animal.friends.push(friend.username);
}

function addMatchesArray(animalArray) {
    animalArray.forEach(function(elem) {return elem.matches = []});
}

function giveMatches(animalArray) {
    animalArray.forEach(function(elem) {return elem.matches.push(animalArray[Math.floor(Math.random() * animalArray.length)].username)});
}

var myFarm = [
    AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']),
    AnimalCreator('Milky', 'cow', 'I love me some beef!', ['moo', 'yummy!', 'are you gonna eat that?']),
    AnimalCreator('Cocky', 'chicken', 'I taste like chicken!', ['b-gawk', 'cock-a-doodle-do', 'peck'])
];

addFriend(myFarm[0], myFarm[1]);
addFriend(myFarm[0], myFarm[2]);
addMatchesArray(myFarm);
giveMatches(myFarm);

console.log(myFarm[0]);
// End Function Exercise --------------------------------








