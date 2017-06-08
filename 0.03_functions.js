//Functions

/*

	function Name_of_Function(){
	
	}

*/
//Declaring the function
function greeting(){
	var name = "Patrick";
	console.log(name +" says\"Hellooooo Vietnam!\"");

}
//calling the function
greeting();
//Challenge declare a function with no parameter that prints the weather to the console 
// then call that function.
var weather = "It's always sunny";
function currentWeather(){
	console.log(weather);//
}
currentWeather();


//void functions with parameters

function shoes(brand){
	console.log("Man those " + brand + " are on fleek!");
}

shoes("Crocs");

// void functions with multiple parameter
function add(num1, num2){
	console.log(num1 + num2);
}

add(34,66);

//functions that return data
function sum(num1, num2){
	return num1 + num2;
}

var answerToQuestion = sum(23, 17);
//create functions that returns the answer for subtracting, mul, 
// div, and mod 2 numbers
function sub(num1, num2){
	return num1 - num2;
}
function mul(num1, num2){
	return num1 * num2;
}
function div(num1, num2){
	return num1 / num2;
}
function mod(num1, num2){
	return num1 % num2;
}

console.log(mod(10,3));

// Create a calculator function that accepts 3 arguments 2 numbers and 1 operator
//inside of the function allow it to take addition, subtraction, multipulcation, division, and modulos
// ex. calculator( 2, *, 2) >> this should return 4
// hints you will need to use conditionals!!

function calculator(num1, operator, num2){
	if(operator == "+"){
		return num1 + num2;
	} else if(operator == "-"){
		return num1 - num2;
	}else if(operator == "*"){
		return num1 * num2
	}else if(operator == "/"){
		return num1 / num2
	}else if(operator == "%"){
		return num1 % num2
	}else {
		return "Please enter a valid operator";
	}
}


console.log(calculator(2,"t",3) )


