// javascript functions

function myFunction(a, b){
    return a*b;
}
let x = myFunction(8,8);
console.log(x);
console.log(`Type of X: `, typeof(x));

//fr to cel
let userValue = prompt("Enter your Fahrenheit Value: ");
userValue = Number(userValue);
function toCel(fahrenheit){
    return(5/9) * (fahrenheit-32)
}
let conVal = toCel(userValue);
document.getElementById("frVal").innerHTML = userValue;
document.getElementById("celVal").innerHTML = conVal;

let text = "Temp is: " +toCel(userValue) + " Celsius";
console.log(text);