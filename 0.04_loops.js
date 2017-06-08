//Loops

// do while loop
/*
lcv = 0 

 do {
 	lcv = lcv + 1
	// some code goes here
 } while( true || false )

*/

var lcv = 0;
do{
  lcv = lcv + 1 ;
  console.log("lcv is now: "+ lcv);
} while(lcv < 6);


//Create a do while loop that counts to 20 by 2's
var ans1 = 0; 
do {
	ans1 = ans1 + 2;
	console.log("Counting to 20 by 2's: "+ans1);
}while(ans1 < 20);
//create a do while loop that counts down from 10 to 0
var ans2 = 10; 

do{
	ans2 -= 1; //ans2 = ans2 - 1
	console.log("Counting down from 10: "+ ans2 );
}while(ans2 > 0)

//while loop 
/*
lcv = 0

while(true || false){
	increment || decrement 
}
*/

var counting = 0;

while(counting < 50){
	console.log(counting);
	counting += 5;
}
// challenge create a countdown from 10 - 0.. instead 
// of zero print blast off 
var countingDown = 10;

while(countingDown > 0){
	countingDown--;
	if(countingDown == 0 ){
		console.log("Blast offfff!");
	}else{
		console.log(countingDown);
	}
}

//For loop 

/*

for (lcv = 0; true or false expression ; increment || decrement){
	//code here
}

*/

for(apples = 0 ; apples < 10; apples++){
	console.log(apples);

}