//prompts the user for an array then logs out the item at the 3rd index. If there are not four items (i.e., if there is no index 3), it logs out the value at the last index

const prompt = require("prompt-sync")({sigint:true});

let array = JSON.parse(prompt("Enter an array: "));

let length = array.length
let lastItem = array[array.length-1];

if (length >= 4){
    console.log("The fourth item is: " + array[3]);
} else {
    console.log("The last item is: " + lastItem);
}



//if condition -> if the input is more that 4 items (inputLength > 4) vs if input is less than 4 items
