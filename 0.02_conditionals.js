//Conditionals 

/*
 Boolean Operators
-----------------------
	> Greater than
	< Less than
	>= Greater or Equal
	<= Less or Equal
	== Equal to  
	=== Strictly Equal To 
	! Not 
	!=  Not Equal to 
*/

console.log(1 > 3); // false? 
console.log( 10 != 10 ); // false
var name = "Kenn";

//           Kenn
console.log(name == "kenn"); // false

console.log(6 == "6"); //true
console.log(6 === "6"); //false

// if statements
/*
if ( boolean expression){
	//some code goes here
}
*/

if (4563 % 2 === 0){
	console.log("this number is even");
}

var userName = "admin45";
var password = "admin";

if (userName == "admin" && password == "admin"){
	console.log("you have been granted access!");
} else {
	//Challenge check if the username is the worng value or the password 
	//Answer:
	if(userName == "admin"){
		console.log("the password is Incorrect");
	} else {
		console.log("the username is Incorrect");
	}
	// console.log("Incorrect details");
}

/*
Chaining boolean expression
-------------------------------
	&& and 
	|| or 
*/

// if statements
/*
if (boolean expression){
	//some code goes here
} else if (boolean expression){
	//some code in here
} else {
	//catch all
}
*/

var age = 20;

if ( age >= 35){
	console.log( "You can vote and also hold any place in gov.")
} else if (age >= 25){
	console.log("You can vote and run for senate");
} else if (age >= 18) {
	console.log("You can only vote!");
} else {
	console.log("You're outta luck!");
}

// Disclaimer: This is a classic job interview question. It would be really good for you to memorize and understand how it’s working just for understanding of the logic behind it. There are a lot of different ways to do it.
 
// Write a program that prints from 1 to 100.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz" instead of the number. 
// For numbers which are multiples of both three and five print "FizzBuzz".

var num = 1; 

while( num < 101){
	if ( num % 15 === 0){
		console.log("FizzBuzz");
	}else if (num % 3 === 0 ){
		console.log("fizz");
	} else if( num % 5 === 0){
		console.log("buzz");
	} else {
		console.log(num);
	}
	num = num + 1; //wonky expression
}