/* Task 02

familymember= prompt("Enter Total Number of Family Memebers")
fitrahmethod= prompt("Choose a fitrah method:\n 1. Wheat - Rs:250\n 2. Barley - Rs:450\n 3. Dates - Rs:2100\n 4 . Rasin - Rs:2800 ");
if (fitrahmethod === "1") {
    selectedMethod = "Wheat";
    methodPrice = 250;
}
else if (fitrahmethod === "2") {
    selectedMethod = "Barley";
    methodPrice = 450;
}
else if (fitrahmethod === "3") {
    selectedMethod = "Dates";
    methodPrice = 2100;
}
else if (fitrahmethod === "4") {
    selectedMethod = "Rasin";
    methodPrice = 2800;
}
fitrahamount = methodPrice* familymember;
alert("your fitrah amount is" + fitrahamount); 
 */


/* Task 03

var SecretNumber = 5;
var guess = +prompt("Guess the secret number");

if (SecretNumber == guess) {
    alert("Congratulations! you guessed right");
}
else if (SecretNumber < guess) {
    alert("Your answer is high, try again");
}
else {
    alert("Your answer is low, try again");
}
 */



/* Task 04:

var name = prompt("Enter your name plz:", "your name please");
var result = name.toUpperCase();
alert(result);
 */



/* Task 05 

empty arrays
let contactNames = [];
let contactNumbers = [];
let userName, userContact;

// user input using loop
for (i = 0; i <= 2; i++) {
    userName = prompt('enter a name:');
    // push user input in array
    contactNames.push(userName);

    userContact = prompt('enter a contact number:');
    // push user input in array
    contactNumbers.push(userContact);
}

for (i = 0; i < contactNames.length; i++) {
    console.log((i + 1) + '- ' + contactNames[i] + ' \n' + contactNumbers[i]);
}  */



/* 
Task 06

var Products = ["ENGLISH","SINDHI","MATHS","SCI","P.ST"]
var position = +prompt("Enter a position number from 0 t0 4")

console.log("All items: " + Products)
var RemovedItem = Products.splice(position,1);

console.log("The removed item is: " + RemovedItem)
console.log("The remaining items are: " + Products)
 */



/* Task 07:

nationality = prompt("Enter Your Nationality");
gender = prompt("Enter your Gender");
age= +prompt("Enter Your Age");
if(nationality == "pakistani" || nationality == "Pakistani" && nationality == "Indian" || nationality == "indian");{
    if( gender == "Male" || gender=="male" && age >= 18)
    alert("Eligible for Vote")
}
if (gender == "Female"|| gender == "female" && age >=18){
   married= prompt(" Are you  Married ?")
   if (married === "yes") {
    alert("You are eligible to vote.");
  } 
  else  {
    alert("You are not eligible to vote.");
 }
}
else{
    alert("You Are Not Eligiable ");
} */



/* TASK 08:
worldCupSquad = ["shaheen shah afridi", "Baber Azam", "Imam-ul-Haq", "Mohammad Rizwan", "Fakhar Zaman", "Shadab Khan", "Faheem Ashraf", "Hassan Ali", "Shahaid Afridi", "Haris Rauf", "Mohammad Hassnain", "Shoaib Malik", "Mohammad Hafeez", "Asif Ali", "Naseem Shah"];

// Make a copy of WorldCupSquad using the slice method

matchTeam = worldCupSquad.slice(0, 11);

// final team players for tomorrow's match

alert("Final team players for tomorrow's match:" + matchTeam);

 */
