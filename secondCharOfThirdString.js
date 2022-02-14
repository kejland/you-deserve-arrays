//  prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead
const prompt = require("prompt-sync")({sigint:true});

let array = JSON.parse(prompt("Enter an array: "));

let thirdItem = array[2];
let secondCh = thirdItem[1];

if (typeof thirdItem === "string"){
    console.log(secondCh);
} else 

if (typeof thirdItem !== "string"){
    console.log("error");
}
  
