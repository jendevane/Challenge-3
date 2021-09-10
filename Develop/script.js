// prompt variables
let paswLength= 0
let useChars = false
let useSymbols = false
let useNumbers = false
// pw types
let lowerChars = 'abcdefghijklmnopqrstuvwxyz'
let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let symbols = '!@#$%^&*'
let numbers = '1234567890'

// function promptMe(){
  document.getElementById("generate").onclick = function()
{
  paswLength = prompt("Enter Password length (8 - 128) characters",8);
  while (paswLength < 8 || paswLength >128) {
     
  }
  }
let result=confirm("Do you want lower case charaters?");
 






// final pw string
let charset = ''

function generatePassword() {
  var length = paswLength
  if (lowerChars === true) {
    charset = lowerChars
  }
  if (upperChars === true) {
    charset = upperChars
  }
  if (useChars === true && useNumbers === true) {
    charset = chars + numbers
  }
  if (useChars === true && useNumbers === true && useSymbols === true) {
    charset = chars + numbers + symbols
  }
  console.log(charset)
  retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

let submit = documentGetElementById('generate')

// fake code below
submit.click(generatePassword())




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
