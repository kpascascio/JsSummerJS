//Objects

var empObject = {};

var johnQualls = {
//  Key         :  Value 
	name 		: "John Qualls",
	age  		: 39,
	hairColor   : "Brown Hair"
}; 

console.log(johnQualls);
console.log(johnQualls.name);
console.log(johnQualls.name + " is of the age: " + johnQualls.age);
johnQualls.height = "6ft";

console.log(johnQualls.height);
console.log(johnQualls);
//Create a animal object with the properties of type, weight, commonINIndiana, and Habitat

var animal = {
	type 			: "bear",
	weight 			: 500, 
	commonINIndiana : false, 
	habitat 		: "100 acre woods"
}
// square bracket notation
console.log(animal["habitat"]);
animal["nickName"] = "Winnie";

console.log(animal["nickName"] + " lives in " + animal["habitat"]);

// reassigning values
animal.type = "moose"
console.log(animal.type)

// change the weight of the animal property using square bracket notation
animal.weight = 600;
// then add a new array property of moviesAboutMe rocky & bullwinkle, Monty Python,
// National Lampoons's Vacation
animal.moviesAboutMe = ["Rocky & Bullwinkle", "Monty Python", "National Lampoon's Vacation"];

console.log(animal)
console.log(Object.keys(animal))

// Objects with methods 

var theBryceIsRight = {
	name 		: "Bryce Greene",
	age  		: 20,
	vocation 	: "TA",
	email 		: "thebryceisright@gmail.com",
	greeting 	: function(){
					return "Greetings earthlings I am " + this.name + " I am here to learn you.";
				  },
	//create a method for contactMe and  include the email property in a retun statement	
	contactMe	: function(){
					return "Connect with me at " + this.email;
				  },
	//create a method that calls both of the methods above 		
	doBoth  	: function(){
					return this.greeting() + this.contactMe();
				  } 
}

console.log(theBryceIsRight.doBoth())

//object constructors 
var paul = new Object;

paul.name = "Paul O'Connor"; 
paul.vocation = "Curriclum Master"; 
paul.hobbies = ["rocking out code", "listening to good music", "baking banana muffins"]; 
// object constructor template 

function Hotel(name, rooms, booked){
	this.name = name; 
	this.rooms = rooms; 
	this.booked = booked; 
	this.checkAvaliablity = function(){
		return "There are " + (this.rooms - this.booked) + " rooms left."
	};
}
 {}
 // the new keyword helps us intanitate a new object
var jw = new Hotel("JW Marriot", 300, 250);
var jwExp = new Hotel("Mini J'Dubs", 100, 50);

//creating an array of hotels
var hotels = [jw, jwExp];
//grabbing the name from one of the hotels 
console.log(hotels[1].name);


//using a for-in loop to grab all the names from the array list of hotels 
for (var h in hotels){
	console.log(hotels[h].name);
}
// console.log(jwExp.checkAvaliablity());


















console.log("\n\n\n\n\n\n\n")