// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];




// Assignment Code
var generateBtn = document.querySelector("#generate");


function getuserOptions(){
    //Ask the user 1 prompts

    //- length?
    var length = prompt("length? more then 8 less then 128")
  
    //ok/cancel (true/false)
    var lowerLetters = confirm("click ok to include lower case letters");
    var upperLetters = confirm("click ok to include upper case letters")
    var numeric= confirm("click ok to include lower case letters")
    var symbols = confirm("click ok to include lower case letters")



    console.log("USERS OPTIONS", length, lowerLetters, upperLetters, numeric, symbols)
    //-number?
    //-sy,bols?
    //-lower case?
    //uppercase?
    
   // -if all confirm responses are  false 
    //return to begining 
     
    //condition for the length

 
    //return is an obj which has 5 keys
    var userOptions = {
       lenght: length,
       lowerCase: lowerLetters,
       uppserCase: upperLetters,
      numbers: numeric,
      symbol:symbols
   }



return userOptions

}


function generatePassword() {

    var options = getuserOptions();
    //its the obj with user options
    console.log(options)

}













// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





