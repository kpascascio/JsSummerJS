//Arrays


//[]
//              <-   0           1      2       3         4
var students = ["Harrison", "Rose", "ben", "Caitlyn", "Kay"];

students[5] = "Nick"
console.log(students);

students.push("Aaron");
console.log(students);

students.pop();
console.log(students);

//For each loop 

//     index     our array 
for (var stu in students){
	var uppercase = students[stu].toUpperCase()
	console.log(uppercase + " is in the position of: " + stu)

}

// Create a array of numbers 1 - 10 then use a for in loop to print it
// to the console.
var numbers = [1,2,3,4,5,6,7,8,9,10];

for (var n in numbers){
	console.log(numbers[n])
}


//creating a for loop that pushes numbers into a empty array 

// var numArry = [];
// for( var num = 1; num < 11 ; num++){
// 	// console.log(num); 
// 	numArry.push(num);
// 	console.log(numArry);
// }
// console.log(numArry);

//Mixed arrays

var time = 11;
var ranThings = ["Bryce", 45, "Summer", true, [" stuff", "stuff2"], time];
console.log(ranThings);




console.log("\n \n \n \n \n \n")



var numArry = [];
for( var num = 1; num < 11 ; num++){
	// console.log(num); 
	numArry.push(num);
	console.log(numArry);
}
console.log(numArry);





function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var rand = [];
var word = "";

for(bet = 0; bet <5; bet++){

    for(lett = 0; lett <5; lett++){

        word = word.concat(alph[(getRandomInt(1,27) - 1)]);

    }//end inside for

    rand.push(word);
    word = "";

}//end outside for

console.log(rand);