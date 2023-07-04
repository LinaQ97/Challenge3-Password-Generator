// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase="abcdefghijklmnopqrstuvwxyz";
var numbers="0123456789";
var specialCharacters="%$@!*()?#=+";

function generatePassword(){

 var passwordSize=window.prompt("Choose a password size between 8 and 128")
 
 if(passwordSize >=8 && passwordSize <=128){
var isSpecialCharacter=window.confirm("Do you want to include special character in your password?")
var isNumber=window.confirm("Do you want to include numbers in your password?")
var isLowerCase=window.confirm("Do you want to include lowercase in your password?")
var isUpperCase=window.confirm("Do you want to include uppercase in your password?")

 }else{window.alert("Sorry, you are outside the password range")}

var userLength = window.prompt("How many characters would you like your password to contain?")

var isLowerCase=window.confirm("Include Lowercase")

window.alert("Invalid")

console.log(userLength)

console.log(isLowerCase)


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);