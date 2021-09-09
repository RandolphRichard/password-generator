var generateBtn = document.querySelector("#generate");

// Assignment code here
var upperCaseLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericCharactere = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharactere = ['!', '@', '#', '$', "%", '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';' ,'"' , '<' ,',' ,'>' ,'.' ,'?' , '/' ];


function questions() {
  var isValid = false;
  do {
    var passwordLength = prompt("Please be mindfull that the password must be at least 8 characters and no more than 128 characters ");
    var askUpperCaseLetter = confirm("Do you require a password With upper case letters?");
    var askLowerCaseLetter = confirm("Do you require a password With lower case letters?");
    var askNumericCharactere = confirm("Do you require a password With numbers?");
    var askSpecialCharactere = confirm("Do you require a password With special characters?");
    var responses = {
      passwordLength: passwordLength,
      askUpperCaseLetter: askUpperCaseLetter,
      askLowerCaseLetter : askLowerCaseLetter ,
      askNumericCharactere : askNumericCharactere,
      askSpecialCharactere : askSpecialCharactere
    } 
    if((passwordLength < 8)||(passwordLength > 128))
    alert("You need to stay  between 8 and 128 characteres");
    else if((!askUpperCaseLetter)&&(!askLowerCaseLetter)&&(!askNumericCharactere)&&(!askSpecialCharactere))
    alert("You need to choose on at least one of the requiremnents.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}
// This function joins all the user responses and then creates the result - a strong password.
function generatePassword() {
  var passwordIdeas = questions();
  var mix = [];
  var lastPassword = "";



  if (passwordIdeas.askNumericCharactere) {
    for (var i of numericCharactere)
      mix.push(i);
  }
  if (passwordIdeas.askLowerCase) {
    for (var i of lowerCaseLetter)
      mix.push(i);
  }
  if (passwordIdeas.askUpperCaseLetter) {
    for (var i of upperCaseLetter)
      mix.push(i);
  }
  if (passwordIdeas.askSpecialCharactere) {
    for (var i of specialCharactere)
      mix.push(i);
  }


  console.log(mix);


  for (var i = 0; i < passwordIdeas.passwordLength; i++) {
    lastPassword  += mix[Math.floor(Math.random() * mix.passwordLength)];
    
  }
  console.log(lastPassword);

  return lastPassword ;
}

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
