// //This is for practice with seperation of logic - user interface/front-end logic and business logic/business-end
// // This is the back-end
// //Function that adds numbers

// let number1;
// let number2;


// alert("You are about to add two numbers.")
// number1 = parseInt(prompt("Enter a number:"));
// number2 = parseInt(prompt("Enter a second number:"));

// // let add = function (number1, number2) {
// //   return number1 + number2;
// // }

// let add = (number1, number2) => number1 + number2

// alert(add(number1, number2));

// //Function that subtracts numbers
// let digit1;
// let digit2;

// alert("You are about to subtract two numbers");
// digit1 = parseInt(prompt("Enter a digit: "));
// digit2 = parseInt(prompt("Enter a second digit:"));

// // function subtract (digit1, digit2) {
// //   return digit1 - digit2
// // }

// //Arrow function for above
// let subtract = (digit1, digit2) => digit1-digit2;
// alert(subtract(digit1, digit2));

// //Function to multiply two numbers
// let firstNumber;
// let secondNumber;

// alert("You are about to multiply two numbers");
// firstNumber = parseInt(prompt("Enter the first number: "));
// secondNumber = parseInt(prompt("Enter the second number: "));

// // function multiply (firstNumber, secondNumber) {
// //   return firstNumber * secondNumber;
// // }

// //Arrow function for above
// let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

// alert(multiply(firstNumber, secondNumber));

// //Function to multiply two numbers

// let Num1;
// let Num2

// alert("You are about to divide two numbers");
// Num1 = parseInt(prompt("Enter the first number: "));
// Num2 = parseInt(prompt("Enter the second number: "));

// let divide = (Num1, Num2) => Num1 /Num2;

// alert(divide(Num1, Num2));

//Function to workout the BMI = weight/ (height in m)squared
// let basalMI;
// let weight;
// let height;

// weight = parseInt(prompt("Please enter your weight in kilograms: "));
// height = parseInt(prompt("Please enter your height in cms: "));

//Basic calculation
// basalMI = ((weight/ height/ height)*10000).toFixed(1);
// alert("Your BMI is " + basalMI);

//Basic function
// function basalCalc (weight, height) {
//   basalMI = ((weight/height/height)*10000).toFixed(1);
//   console.log("Your BMI is " + basalMI);
// }

//Arrow Function
// let basalCalc = (weight, height) => {
//   basalMI = ((weight/height/height)*10000).toFixed(1);
//   if (basalMI<18.5) {
//     alert("Your BMI is " + basalMI + " and it shows that you are underweight")
//   } else if (basalMI>=18.5 && basalMI <=24.9) {
//     alert("Your BMI is " + basalMI + " and it shows that you have a healthy BMI")
//   } else if (basalMI >=25.0 && basalMI<= 29.9) {
//     alert("Your BMI is " + basalMI + " and it shows you are a little overweight.");
//   } else if (basalMI>= 30.0 && basalMI<=34.9) {
//     alert("Your BMI is " + basalMI + " and it shows you have low risk obesity");
//   } else if (basalMI>=35.0 && basalMI<=39.9) {
//     alert("Your BMI is " + basalMI + " and it shows you have moderate risk obesity");
//   } else if (basalMI >= 40.0) {
//     alert("Your BMI is " + basalMI + " and it shows you have high risk obesity");
//   } else {
//     alert("Your BMI is " + basalMI +" Please consult your doctor");
//   }
// }

// basalCalc(weight, height);

// Celsius to Fahrenheit formula
//Prompt the user to enter the temperature in Degrees Fahrenheit

// let userTemp = parseFloat(prompt("Please enter your temperature in degrees Fahrenheit: "));

// let newTemp;

//Create function to convert
// function tempConvert(temp) {
//   newTemp=((userTemp-32)/1.8).toFixed(2);
//   alert("The converted temperature is " + newTemp + " degrees Celsius");
// }

//Arrow function
// let tempConvert = temp => {
//   newTemp=((userTemp-32)/1.8).toFixed(2);
//   alert("The converted temperature is " + newTemp + " degrees Celsius");
// }

// tempConvert(userTemp);


//if/else statements
// let temperature = parseFloat(prompt("What is today's temperature?"));

// if (temperature<10) {
//   console.log("Brrrr, Grab your hat")
// } else if (temperature<20) {
//   console.log("Do not forget your jacket today!");
// } else if (temperature<30) {
//   console.log("Have a super day ahead!");
// } else {
//   console.log("Make sure you stay hydrated")
// }

//Calculate whether a number is even 

// let userNumber = parseInt(prompt("Enter a number here to find out if it is an even number"));

// function evenCalc (userNum) {
//   if (userNumber%2=== 0) {
//     alert("The number you entered is an even number");
//   } else {
//     alert("The number you entered is an uneven number");
//   }
// }

// evenCalc(userNumber);

//Here is a grade score table. write a function that calculates the grades. 100 - 80(A) 79 - 60(B) 59 - 40 (C)39 - 20 (D) 20 - 0(E) REM: && - both of these must be true. || - either of these may be true

// let userScore = parseFloat(prompt("Enter your test score here to get graded"));

// let grade = score => {
//   if (userScore>=80 && userScore <=100) {
//     alert("You scored an A");
//   } else if (userScore>=60 && userScore <=79) {
//     alert("You scored a B");
//   } else if (userScore>=40 && userScore <=59) {
//     alert("You scored a C");
//   } else if (userScore>=20 && userScore <=39) {
//     alert("You scored  D");
//   } else if (userScore<=20 && userScore>=0) {
//     alert("You scored an E");
//   } else {
//       alert("The test score you entered is invalid");
//     }
//   }


// grade(userScore);

//Functions can return more than one value using an array
// function getSize(width, height, depth) {
//   let area = width * height;
//   let volume = area * depth;
//   let sizes =[area, volume];
//   console.log(sizes);     //outputs an array [4, 8]
// }

// getSize(2, 2, 2);


//Personality Quiz

// alert("Let's take a personality quiz to find the pet you should get!");
// let personality = prompt("Are you an introvert or an extrovert?");
// let aura = prompt("Do you love the indoors or the outdoors?");

// function personalityQuiz (personality, aura) {
//   if (personality === introvert && aura === indoor) {
//     alert("Your best bet is a cat, miaaaoow");
//   } else if (personality === introvert && aura === outdoor) {
//     alert("You better go for a parrot!");
//   } else if (ersonality === extrovert && aura === indoor) {
//     alert("A larador is your ideal pet");
//   } else {
//     alert("A Siberian Husky is life's perfect addition for you!")
//   }
// }

// personalityQuiz(personality, aura);


//Looping in Arrays
// let languages = ["HMTL", "CSS", "Javascript"];

// languages.forEach(function(language) {
//   alert("I love " + language + "! How about you?");
// });

//alerts 3x, to say "I love 'language)! How about you?"

// let total = 0;
// let summands = [1, 2, 3, 4, 5];

// summands.forEach(function(summand) {
//   total = total + summand;
// });

// // for (let index = 0; index < summands.length; index++) {
// //   total = total + summands[index];
// //   }

// console.log(total);

// Make an array of numbers, then use .map() to return an array containing each of the original numbers + 1.

let myNumbers = [100, 200, 300, 400, 500];

let myNewNumbers = myNumbers.map(function (myNumber) {
    return myNumber + 1;
});

let myNames = ["Stacy", "Tiffany", "Stephanie"];

let myNewNames = myNames.map(myName => myName.toUpperCase());

let myFruits = ["papaya", "mango", "banana"];

// let myNewFruits = myFruits.map(myFruit=> myFruit.toUpperCase());

let myNewFruits = myFruits.map(function (myFruit) {
    return myFruit.toUpperCase();
});

let myOtherFruits = myFruits.map(function (myFruit) {
    return myFruit.toLowerCase();
});

// console.log(myOtherFruits);

//Make an array of your friends' names. Loop through it and alert() a greeting to each.

// let myFriends = ["Jontez", "Yakub", "Gathoni"];

// myFriends.forEach(myFriend => {
//     alert("Sending a greeting to you " + myFriend);
// });

// let myDigits = [2, 4, 6, 8];
// let digitTotal = 1;

// let myNewSet = myDigits.forEach(myDigit => {
//     return digitTotal *= myDigit
// });

//returns undefined

// for (let index = 0; index < myDigits.length; index++) {
//     digitTotal *= myDigits[index];    
// };

//returns 384

//Double every number in an array using forEach

// let pracNumbers = [100, 200, 300, 400, 500];
// let doubleNumbers = [];

// // pracNumbers.forEach(pracNumber => {
// //     doubleNumbers.push(pracNumber *2);
// // });

// //Do the sme using map()
// doubleNumbers = pracNumbers.map(pracNumber => pracNumber * 2);

//output [200, 400, 600, 800, 1000];

//Code for groceries
//Create function that allows a user to input items they need at the store, separating each item with a comma.

//When the user submits their grocery list, log each item to the console on a separate line. Make sure that the commas do not display in the console log.

//Got this from geeks for geeks. Assign the grocery list to a variable that allows user input from using prompt() method

// let userGreens = prompt("What items do you need at the store? Separate each item with a comma eg beet, pawpaw:");


//You will then use the .split() method that separates the entry (which comes in string form) depending on the seperator, in this case , and creates an array
// let arrGroceries = userGreens.split(",");
// console.log(arrGroceries);

// //I want to arrange the array alphabetically using .sort()

// let sortedGroceries = arrGroceries.sort();
// console.log(sortedGroceries);

// //To log each of the entries on a separate line, I used the for loop to console log every item of the array without the commas displaying, and in alphabetical order
// for (let index = 0; index< sortedGroceries.length; index++) {
//     console.log(sortedGroceries[index]);    
// }


// let userSentence = prompt("Please enter a sentence in English:");

//Turn that sentence into an array using the split method 
// let arrSentence = userSentence.split(" ");
// console.log(arrSentence);

//initiating a variable to hold the longest word as i wonder how to loop over and push words that > 3 characters into a new array using for loop

//My sentence will be "The quick brown fox jumped over the lazy dog"

// let myWords = "The quick brown fox jumped over the lazy dog";

// let mySortedWords = myWords.split(" ");
// console.log(mySortedWords);         //output as an array['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']

// let longestWord = 0;

// for (let index = 0; index < mySortedWords.length; index++) {
//     if (mySortedWords[index].length > longestWord) {
//         longestWord = mySortedWords[index].length;
//     }
// }
//Explanation for the above loop

/* Here mySortedWords.length = 9, 9 words
   For each iteration: index = ?   index < mySortedWords.length?   index++  if(mySortedWords[index].length > longestWord)?   longestWord = mySortedWords[index].length
   1st iteration:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
   2nd iteration:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5   
   3rd iteration:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5   
   4th iteration:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5  
   5th iteration:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6 
   6th iteration:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6 
   7th iteration:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
   8th iteration:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6 
   9th iteration:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6 
   10th iteration:       9             no               
   End of the FOR Loop*/

//   Step 4. Return the longest word
//   return longestWord; // 6

//<-------RETURN THE LONGEST WORD----------->

// function findTheLongestWord(sentensi) {
//     let mySentence = prompt("Please enter a new sentence here");      //it will be a variable that houses a string

//     let arrSentence = mySentence.split(" ");
//     console.log(arrSentence);       //this will be output as an array. i will then loop through the array using for loop, there'll be an if statement within the for loop

//     let theLongestWord = 0;     //create a variable to hold the length of the longest word. it starts at 0

//     for (let index = 0; index < arrSentence.length; index++) {
//         if (arrSentence[index].length > theLongestWord) {
//             theLongestWord = arrSentence[index].length;
//         }
//     }

//     console.log(theLongestWord);
// }

// findTheLongestWord();

//<------------------NEW TASK------------>
//Word Play
//Create a function where users may enter a sentence.

// function wordPlay(sentence) {
//     let wordPlaySentence = prompt("Would you please enter a new sentence here:");            //the input is entered as a string. so convert it to an array using .split() method


//Turn that sentence into an array using the split method
// let wordPlayArray = wordPlaySentence.split(" ");
// console.log(wordPlayArray);

//Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.

// let moreThanThree = [];
// for (let index = 0; index < wordPlayArray.length; index++) {
//     if (wordPlayArray[index].length > 3) {
//         moreThanThree.push(wordPlayArray[index]);
//     }
// }
// console.log(moreThanThree);

//reverse the order of the new array,
// let newerArr = moreThanThree.reverse();
// console.log(newerArr);

//Join it back together to  string and print to console. I tried using the .toString method but was wondering how to concat the words
//Then i realized that the LMS had offered a new method called join(). i left just a space to create a string
// console.log(newerArr.join(" "));            //tonight shall Where
// console.log(newerArr.join(","));            //tonight,shall,where
// }

// wordPlay()

// <------------NEW TASK------------>
//Build a Deck

// function shortestWord (word) {
//     let theInput = prompt("Type a sentence here to find the shortest word.");

//     let theInputArr = theInput.split(" ");
//     console.log(theInputArr);

//     let theShortestWord = 0;

//     for (let index = 0; index < theInputArr.length; index++) {
//        if (theInputArr[index].length<theShortestWord) {
//        theShortestWord=theInputArr[index];
//        }
//     }
//    console.log(theShortestWord);
// }

// shortestWord();

// function findLongestWord(str) {
//     let userSent = prompt("Enter a sentence to find the longest word")
//     let strSplit = userSent.split(" ");

//     let longestWord = "";


//     for (let i = 0; i < strSplit.length; i++) {
//         // let individualWord = strSplit[i];
//         if (strSplit[i].length > longestWord.length) {
//             longestWord = strSplit[i];
//         }
//     }
//     console.log(longestWord.length);
// }
// findLongestWord();

//<-----GET THE LONGEST WORD AGAIN, this one gets the total length of the word and not the word itself!!!!-------->

// function jinaNdefuSana (jina) {
//     let userSentensi = prompt("Enter a sentence to find jina ndefu");

//     let userArr = userSentensi.split(" ");

//     let jinaNdefu = 0;

//     for (let index = 0; index < userArr.length; index++) {
//         if (userArr[index].length>jinaNdefu) {
//             jinaNdefu = userArr[index].length;
//                 }        
//     }
//     console.log(jinaNdefu);
// }

// jinaNdefuSana();

//<-----------USE SORT() METHOD TO GET THE LONGEST WORD-------->
// by default, sort() stores values as strings and returns the sorted array. its default sort order is ascending, works well for strings because its apple then banana. ut preference is given to words that start with a capital letter. For numbers, 25> 100 because 2 is bigger than one, which is incorrect. To sort this out, provide a compare function within the sort method. a-b sorts the array in ascending order, b-a sorts the array in descending order

//eg    const points = [40, 100, 1, 5, 25, 10];
//      points.sort(function(a, b){return a - b});

//USING THE SORT METHOD WE CAN FIND THE LONGEST WORD BY SORTING THE ARRAY IN DESCENDIN ORDER THEN ACCESSING INDEX [0] AND VICE VERSA
// let sentence = prompt("Enter  sentence here to find the longest word using sort() method: ")

// let sentArray = sentence.split(" ");

// let sortSentArr = sentArray.sort(function (strA, strB) {
//     return strB.length - strA.length
// });

// console.log(sortSentArr[0]);


// const str = "Hardships often prepare ordinary people for an extraordinary destiny";
// const largestSmallest = str => {
//    const strArr = str.split(" ");
//    let min = strArr[0];
//    let max = strArr[0];
//    for(let i = 1; i < strArr.length; i++){
//       if(strArr[i].length < min.length){
//          min = strArr[i];
//       };
//       if(strArr[i].length > max.length){
//          max = strArr[i];
//       };
//    };
//    return [min, max];
// };
// console.log(largestSmallest(str));

//<----BUILD A DECK OF CARDS JS task from LMS------>
//needs an understanding of ojects and for each

// let pracUser = prompt("Enter a sentence");

// let pracUserArr = pracUser.split(" ");

// let newLongWord = pracUserArr.sort(function(a, b) {
//     return a-b
// });

// console.log(newLongWord);



