//prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10
const prompt = require("prompt-sync")({sigint:true});

let array = JSON.parse(prompt("Enter an array: "));

let length = array.length

let lessThan10 = false;

if (length < 10){
    lessThan10 = true;
} 

if (lessThan10 === true){
    console.log("There are less than 10 items in your array")
} else {
    console.log("There are at least 10 items in your array")
}



// if (length < 10){
//     lessThan10 = true;
//     console.log(lessThan10);
// } else {
//     console.log(lessThan10);
// }

