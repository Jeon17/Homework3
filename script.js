// Assignment Code
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");


// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var alphabetUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var alphabetLower="abcdefghijklmnopqrstuvwxyz"; 
  var specChar="!@#$%&*"
  var password= ""

for (let counter = 0; counter < 5; counter++) {
  var upperIndex= randomNumber(alphabetUpper.length)
  var lowerIndex= randomNumber(alphabetLower.length)
  var specCharIndex= randomNumber(specChar.length)
  password+= alphabetLower[lowerIndex];
  password+= alphabetUpper[upperIndex];
  password+= specChar[specCharIndex];

  }
return password
}


function randomNumber(limit){
 return Math.floor(Math.random()*limit)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function clear(){
  document.getElementById("clear").reset();
}
