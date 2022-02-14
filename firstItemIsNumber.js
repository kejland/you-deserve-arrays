//prompts the user for an array then logs out a boolean indicating whether or not the first item in the array is a number

const prompt = require("prompt-sync")({sigint:true});

let array = JSON.parse(prompt("Enter an array: "));

let firstItem = array[0];

let outcome = false;

if (typeof firstItem === "number"){
    outcome = true 
}

if (outcome === true){
    console.log(outcome);
} else {
    console.log(outcome);
}
//type of returns a word -> and if the word is "number" -> then it is true



//["1", "Jake", "John", "Mino", "Jim", "Mary", "Joe", "Peter"]