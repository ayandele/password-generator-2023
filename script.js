// Assignment Code
var generateBtn = document.querySelector("#generate");


const lenght = "";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "01234567890";
const symbol = "!@£$%^&*_+-";

function checklength(lenght) {
  if (length <= 8 || lenght >= 128) {
    window.alert("Invalid Entry. Please choose a password length between 8 and 128")
    generatePassword();
  }
  return lenght;
}

function generatePassword() {
let enteredlength = 0;
enteredlength = window.prompt("Please choose the length of your password");
console.log(enteredlength);

if (enteredlength <= 8 || enteredlength >=128){
window.alert("Invalie Entry. Please choose a password length between 8 and 128")
return;

}

const numberResult = window.confirm("would you like to include numbers?");
const symbolResult = window.confirm("would you like to include speacial characters?");
const upperResult = window.confirm("would like to include uppercase letters?");
const lowerResult = window.confirm("would you like to include lowercase letters?");

let arrayResult = [];
let userResult = [];
if (numberResult) {
  arrayResult = arrayResult.concat(number.split(""))
}

if (symbolResult) {
  arrayResult = arrayResult.concat(symbol.split(""))
}

if (upperResult) {
  arrayResult = arrayResult.concat(upperCase.split(""))
}

if (lowerResult) {
  arrayResult = arrayResult.concat(lowerCase.split(""))
}

console.log(enteredlength);
for (let i = 0; i < enteredlength; i++) {
  userResult.push(arrayResult[Math.floor(Math.random() + arrayResult.length)]);

}

return userResult.join("");

//function writePassword() {
 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");
 //passwordText.value = password;

 //Add event listener to generate button
//generateBtn.addEventListener("click", writePassword); {

  //return randomPassword;
 
 }

//

//console.log(userResult);
//return userResult;


// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
//console.log(userResult);
 //return randomPassword;

}