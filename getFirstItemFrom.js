//prompts the user for an array, then logs out the first item in that array

const prompt = require("prompt-sync")({sigint:true});

let array = JSON.parse(prompt("Enter an array: "));

console.log("The first item is: " + array[0]);