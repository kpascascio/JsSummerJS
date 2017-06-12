
//create an array of 15 random numbers and cont how many numbers are prime
var arrfor15 = [];
var primes = 0;
for(var i = 0; i < 14; i++){
	var rn = Math.floor(Math.random() * 50) + 1;

	if((rn % 2 !== 0 && rn % 3 !== 0) && rn != 1){
		primes++;
	}
	arrfor15.push(rn);
}
console.log("There are " + primes + " prime numbers in the array: \n" + arrfor15)

//challenge 2

var fivesarr = []
var x = 5; 
while(x < 46){ fivesarr.push(x); x++}

// for(var f in fivesarr){
// 	if (fivesarr[f] % 3 == 0 || fivesarr[f] % 5 == 0 || fivesarr[f] == 6){
// 		if(fivesarr[f] == 6){
// 			console.log("woo")
// 		}
// 		fivesarr.splice(f, 1);
// 	}
// }
// The array is being re-indexed when you do a .splice(), which means you'll skip over an index when one is removed, and your cached .length is obsolete.

// To fix it, you'd either need to decrement i after a .splice(), or simply iterate in reverse...
var f = fivesarr.length
while(f--){
	if (fivesarr[f] % 3 == 0 || fivesarr[f] % 5 == 0 || fivesarr[f] == 6){
		fivesarr.splice(f, 1);
	}
}
console.log(fivesarr)

//challenge 3
// var wordArr = ["bacon", "eggs", "applesauce", "oatmeal", "onions"];
// var numArr= [1,2,3,4,5];
// var wordNum = []
// for (var w in wordArr){
// 	wordNum.push(wordArr[w] + " - " + numArr[w])
// }

// console.log(wordNum);

//challenge 4
var alphaArr = ["a","b", "c", "d", "e"]