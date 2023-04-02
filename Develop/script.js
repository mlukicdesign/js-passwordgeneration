// Assignment Code
var generateBtn = document.querySelector("#generate");


// Ask User password length  (8 - 128 characters) 
//    - Display error if length is incorrect 


//Ask if symbols are required 
// Ask if user wants lowercase characters 
// Ask if user wants uppercase characters 
// Ask if user wants numbers 

//Generate pass based on criteria 
// Return generated password
// update DOM

function generatePassword() {

  let length = 0;
  while (length < 8 || length > 128) {
  length = parseInt(prompt("Enter the desired password length:"));
  if (length < 8 || length > 128 ) {
    alert("Password length must be between 8 and 128 characters.");
    }
  }

  let lowercase = confirm("Include lowercase letters?");
  let uppercase = confirm("Include uppercase letters?");
  let numbers = confirm("Include numbers?");
  let symbols = confirm("Include symbols (!, @, #, $, %)?");
  
  let charset = "";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) charset += "0123456789";
  if (symbols) charset += "!@#$%";
  if  charset == false;
    alert("Error: At least one character type should be selected");

  
  let password = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
return password;
}



// Write password to the #password input

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
