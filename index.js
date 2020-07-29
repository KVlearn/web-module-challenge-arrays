var originalFlavors = ["Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
   "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"]

/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

(1) an array 

Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31. 

i.e. is31Flavors(originalFlavors) will return TRUE.*/
const myTopFlavors = ["Chocolate chips","Rocky Road","French Vanila"];
const myToppings = ["almond chips","caramel","honey","walnut","strawberry"]

console.log(`Is your array length 31? : ${is31Flavors(originalFlavors)}`);
console.log(`Is your array length 31? : ${is31Flavors(myTopFlavors)}`);
console.log(`Is your array length 31? : ${is31Flavors(myToppings)}`);

function is31Flavors(inputArray){
let myLength=0;
const totLength=31;
myLength=inputArray.length;
return(Boolean(myLength===totLength));
}

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Your function should accept:

(1) an array 
(2) a flavor

Your function should add the flavor to the front of the array and console.log the resulting array.

For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */ 

function addFlavor(inputArray,flavorToAdd){
    /* unshift adds the element to the beginning of the array */
    inputArray.unshift(flavorToAdd);
    console.log(inputArray);
}

addFlavor(originalFlavors,'Rainbow Sherbert');
console.log("Now the Array length is: " + originalFlavors.length);

/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. 

Your function should accept:

(1) an array 

Your function should remove a flavor from the end of the array and console.log the resulting array.

For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/ 

function removeLastFlavor(inputArray){
    /* pop() method removes last item in an array */
    inputArray.pop();
    console.log(inputArray);
    /* note for me :pop() returns that removed one element when used in return statement */
}
removeLastFlavor(originalFlavors);

/* Task 4: Write a function that returns a flavor at a given index in the array.

Your function should accept:

(1) an array 
(2) an index

For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

function getFlavorByIndex(inputArray,inIndex){
    return(inputArray[inIndex])
}
console.log(`Here is your item : ${getFlavorByIndex(originalFlavors, 2)}`);

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. 

Your function should accept: 

(1) an array
(2) a string (flavor)

For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 

Hint: You can use .splice() for this

*/
/*The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.*/

function removeFlavorByName(inputArray,flavorToRemove){
for(i=0;i<inputArray.length;i++){
    if (inputArray[i]=== flavorToRemove){
        /*remove one element from index matching flavorIndex;*/
        inputArray.splice(i,1)
    }
    }
return inputArray;
}
removeFlavorByName(originalFlavors, "Vanilla")
console.log(`After Splice: ${originalFlavors}`);

removeFlavorByName(originalFlavors, "Peppermint Fudge Ribbon")
console.log(`After Splice: ${originalFlavors}`);

/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array. 

Your function should accept: 

2 arguments 1 for your new array and one for your original array

and should return a new array that is identical to the old array. You can name the new array however you'd like. */

const flavourCopy=[];
function copy(newArray,originalArray){
 newArray=[...originalArray];
 console.log('newarray"' + newArray)
 return(newArray);
}

console.log('copied array:' + copy(flavourCopy,originalFlavors));

/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

Your function should accept: 

(1) an Array
(2) a string (i.e. "chocolate")

and return a new array. 

For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

hint - you can use the .includes method to help you solve this */

function filterByWord(inputArray,yourString){
    outArray=[];
    for(i=0;i<inputArray.length;i++){
    /* check if the input array item includes the given string */    
     if(inputArray[i].includes(yourString)){
        /* Push to the output array if it includes the string */ 
         outArray.push(inputArray[i]);
     }
    }return outArray;
}

console.log(filterByWord(originalFlavors, "Chocolate"));


/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Your function should accept: 

(1) an array

and should return the average number of words per item in the array. 

For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */


mySet=['Tesla','Tesla Model3','Tesla Model X','Tesla Model ModelY']
// Total number of words:9, total array count :4//
// getAverageWordLength(originalFlavors);
getAverageWordLength(mySet);

function getAverageWordLength(yourArray){
 let numOfWords=0;
 let avg=0;
 for(i=0;i<yourArray.length;i++){
   /*The split() method is used to split a string into an array of substrings, and returns the new array*/
   /*Gets split word in to seperate array, say "Lemon crisp" to [lemon,crisp]"*/
   afterSplit=yourArray[i].split(" ")
   console.log('Aftersplit= ' + afterSplit);
   /*Count the length when we split the words each time */ 
   numOfWords= numOfWords + afterSplit.length;  
   console.log('numofWords=' + afterSplit.length);
 }
console.log('Total Number of Words = '+ numOfWords);
console.log('Length of Your Array = ' + yourArray.length);
avg= (numOfWords / yourArray.length);
console.log('Average Words in Each of your Array item: ' + avg);
}

/* STRETCH 2: Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].*/

// Data ⬇️
var newFlavors = ["Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"] 
var seasonalFlavors = ["America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango",]
var regionalFlavors = ["Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"]

 /*Get the random number 0,1,2 or 3, to choose from the 4 arrays */
 console.log(Math.floor(Math.random()*4));

//  getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors,regionalFlavors);
 
 function getRandomFlavors(arrayA,arrayB,arrayC,arrayD){
  let randomFlavors=[];
  let randomChoice=0;   
  let outArraysize=31;
  let randomIndex=0;
  for(i=0;i<31;i++) 
  {
   randomChoice= Math.floor(Math.random()*4);
   console.log('randomchoice=' + randomChoice);
   if (randomChoice===0){
     randomIndex = Math.floor((Math.random() * arrayA.length));
     randomFlavors.push(arrayA[randomIndex]);
   }else if (randomChoice===1){
     randomIndex = Math.floor((Math.random() * arrayB.length));
     randomFlavors.push(arrayB[randomIndex]);
   }else if (randomChoice===2){
     randomIndex = Math.floor((Math.random() * arrayC.length));
     randomFlavors.push(arrayC[randomIndex]);
   }else if (randomChoice===3){
     randomIndex = Math.floor((Math.random() * arrayD.length));
     randomFlavors.push(arrayD[randomIndex]);
   }
 }
 console.log('randomFlavors: ' + randomFlavors);
 console.log('randomflavors length:' + randomFlavors.length);
  return randomFlavors;
 }
 
