// javascript Objects

const person = {
    firstName: "jon",
    lastName: "Doe",
    age: 20,
    countryName: "America",
    eyeColor: "blue",
    userFullName: function(){
        return firstName+" "+lastName;
    },
    hasCars:{
        car1: "Toyota",
        car2: "Honda",
        car3: "BMW"
    }
}

let firstName = person.firstName;
let lastName = person.lastName;
let age = person.age;
let countryName = person.countryName;
let eyeColor = person.eyeColor;

console.log(`${firstName} Details:\nFirst Name:\t${firstName}\nLast Name:\t${lastName}\nAge:\t\t${age}\nCountry Name:\t${countryName}\nEye Color:\t${eyeColor}`);
console.log(`${firstName} Full Name:\t${person.userFullName()}`);
console.log(`${firstName} Has Cars Details:\nCar One Name:\t${person.hasCars.car1}\nSecond Car Name:\t${person.hasCars.car2}\nThird Car Name: ${person.hasCars.car3}\n\n`);
//create object
const cars = new Object();
cars.name = "Volvo";
cars.color = "black";
cars.hasFourWeel = false;

console.log(`\n\n${cars.name} Details:\nCar Name:\t${cars.name}\nCar Color:\t${cars.color}\nCar Has Four Weel Drive Option:\t${cars.hasFourWeel}`);

//display
document.getElementById("demo").innerHTML = `First Name:${firstName}<br>Last Name:\t${lastName}<br>Full Name:
\t${person.userFullName()}<br>Age:\t${age}<br>Country Name:\t${countryName}<br>Eye Color:\t${eyeColor}`;

//display using array
const myArray = Object.values(cars);
document.getElementById("cars").innerHTML = myArray;

//display JSON using
let myString = JSON.stringify(person);
document.getElementById("demo2").innerHTML = myString;

//object constructor
function userDetails(fName, lName, uAge, uCountry){
    this.userFname = fName;
    this.userLname = lName;
    this.userAge = uAge;
    this.userCountry = uCountry;
    this.fullName = function (){
        return fName+" "+lName;
    }
}
const peronOne = new userDetails("Abc", "Efg", 20, "America");

document.getElementById("demo3").innerHTML = `User Details:<br>First Name:${peronOne.userFname}<br>
Last Name:${peronOne.userLname}<br>Country Name:${peronOne.userCountry}<br>Age:${peronOne.userAge}<br>User Full Name:${peronOne.fullName()}`;