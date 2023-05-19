// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@£$%^&*_+-";

function generatePassword() {
  let enteredlength = 0;
  enteredlength = window.prompt("Please choose the length of your password");

  if (enteredlength < 8 || enteredlength > 128) {
    window.alert("Invalid Entry. Please choose a password length between 8 and 128");
    return;
  }

  const numberResult = window.confirm("Would you like to include numbers?");
  const symbolResult = window.confirm("Would you like to include special characters?");
  const upperResult = window.confirm("Would you like to include uppercase letters?");
  const lowerResult = window.confirm("Would you like to include lowercase letters?");

  let arrayResult = [];
  let userResult = [];

  if (numberResult) {
    arrayResult = arrayResult.concat(number.split(""));
  }

  if (symbolResult) {
    arrayResult = arrayResult.concat(symbol.split(""));
  }

  if (upperResult) {
    arrayResult = arrayResult.concat(upperCase.split(""));
  }

  if (lowerResult) {
    arrayResult = arrayResult.concat(lowerCase.split(""));
  }

  for (let i = 0; i < enteredlength; i++) {
    userResult.push(arrayResult[Math.floor(Math.random() * arrayResult.length)]);
  }

  return userResult.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
