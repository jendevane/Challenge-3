// prompt variables
let paswLength = 0
let useChars = false
let useSymbols = false
let useNumbers = false
// pw types
let lowerChars = 'abcdefghijklmnopqrstuvwxyz'
let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let symbols = '!@#$%^&*'
let numbers = '1234567890'

let charset = ''

function generatePassword() {
  paswLength = prompt('Enter Password length (8 - 128) characters', 8)
  let lower = confirm('Do you want lower case charaters?')
  var length = paswLength
  if (lower === true) {
    charset += lowerChars
    console.log(charset)
  }
  let upper = confirm('Do you want upper case charaters?')
  if (upper === true) {
    charset += upperChars
  }
  let sym = confirm('Do you want symbols?')
  if (sym === true) {
    charset += symbols
  }
  let num = confirm('Do you want numbers?')
  if (num === true) {
    charset += numbers
  }

  retVal = ''
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n))
  }
  return retVal
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
