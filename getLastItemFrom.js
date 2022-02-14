//prompts the user for an array, then logs out the last item from that array

const prompt = require("prompt-sync")({sigint:true});

let array = JSON.parse(prompt("Enter an array: "));

console.log("The last item is: " + array[array.length-1]);